const express = require("express");
const CommentModel = require("../models/Comment.model");
const PostModel = require("../models/Post.model");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserModel = require("../models/User.model");

const generateToken = require("../config/jwt.config");
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");
const isAdmin = require("../middlewares/isAdmin");

/* //importar middleware
const middlewareTeste = require("../middlewares/teste"); */

//1.1 Alterar model do Usuário
//1.1 criar rota sign-up
//sign-up
router.post("/sign-up", async (req, res) => {
  try {
    const { password } = req.body;

    //checar se a chave password EXISTE e se ela passou na minha regEX
    if (
      !password ||
      !password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#_!])[0-9a-zA-Z$*&@#_!]{8,}$/
      )
    ) {
      return res
        .status(400)
        .json({ message: "Senha não atende aos parâmetros de segurança" });
    }

    //gerar salt
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);

    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      ...req.body,
      passwordHash: passwordHash,
    });

    delete newUser._doc.passwordHash;

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Por favor, informe seu email e senha! " });
    }

    //achar o user que está tentando logar
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Usuário não encontrado no banco de dados" });
    }

    if (await bcrypt.compare(password, user.passwordHash)) {
      delete user._doc.passwordHash;
      //usuário acertou a senha. ele está LOGADO
      //!CRIAR UM TOKEN PARA O USUÁRIO LOGADO
      const token = generateToken(user);

      return res.status(200).json({
        user: user,
        token: token,
      });
    } else {
      //usuário não acertou a senha. NÃO FOI LOGADO
      return res.status(400).json({ message: "Senha ou email incorretos." });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/profile", isAuth, attachCurrentUser, async (req, res) => {
  try {
    //console.log(req.auth) criado no middle isAuth
    console.log(req.currentUser); // criado no middle attachCurrentUser

    return res.status(200).json(req.currentUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

/* router.post("/create", async (req, res) => {
  try {
    const newUser = await UserModel.create({ ...req.body });

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}); */

router.get("/all", isAuth, attachCurrentUser, isAdmin, async (req, res) => {
  try {
    const allUsers = await UserModel.find({}, { passwordHash: 0 });

    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

//profile
/* router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id).populate("posts");

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}); */

router.put("/edit", isAuth, attachCurrentUser, async (req, res) => {
  try {
    const idUser = req.currentUser._id;

    const editedUser = await UserModel.findByIdAndUpdate(
      idUser,
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json(editedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.delete("/delete", isAuth, attachCurrentUser, async (req, res) => {
  try {
    const idUser = req.currentUser._id;

    //deletando o usuário
    const deletedUser = await UserModel.findByIdAndDelete(idUser, {
      passwordHash: 0,
    });

    //deletando todos os comentários que o usuário já fez
    const deletedComments = await CommentModel.deleteMany({ author: idUser });

    //primeiro eu vou PROCURAR todos os posts que o usuário fez
    const postsFromUser = await PostModel.find({ author: idUser }); //array

    //iterar por todos os posts!
    postsFromUser.forEach(async (post) => {
      //iterar por todos os meus COMMENTS
      post.comments.forEach(async (comment) => {
        await CommentModel.findByIdAndDelete(comment._id);
      });
    });

    //deletando todos os posts que o usuários já fez
    const deletedPosts = await PostModel.deleteMany({ author: idUser });

    /*     //deletar o usuário da array de following
    await UserModel.updateMany(
      { following: idUser },
      {
        $pull: { following: idUser },
      }
    );

    await UserModel.updateMany(
      { followers: idUser },
      {
        $pull: { followers: idUser },
      }
    ); */

    await UserModel.updateMany(
      {
        $or: [
          { following: { $in: [idUser] } },
          { followers: { $in: [idUser] } },
        ],
      },
      {
        $pull: {
          following: idUser,
          followers: idUser,
        },
      }
    );

    //deletar o usuário da array de folowers

    return res.status(200).json({
      deleteduser: deletedUser,
      postsFromUser: postsFromUser,
      commentsUser: deletedComments,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});
// ana              // bruno
//quem está seguindo // quem foi seguido
router.put(
  "/follow/:idUserFollowed",
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    try {
      const idUserFollowing = req.currentUser._id;
      const { idUserFollowed } = req.params;

      //FARIA UM IF PARA NÃO DEIXAR O PRÓPRIO USUÁRIO SE SEGUIR

      //ana
      const userFollowing = await UserModel.findByIdAndUpdate(
        idUserFollowing,
        {
          $addToSet: { following: idUserFollowed },
        },
        { new: true }
      );

      //bruno
      const userFollowed = await UserModel.findByIdAndUpdate(idUserFollowed, {
        $addToSet: { followers: idUserFollowing },
      });

      return res.status(200).json(userFollowing);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
);

router.put(
  "/unfollow/:idUserUnfollowed",
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    try {
      const { idUserUnfollowed } = req.params;
      const idUserUnfollowing = req.currentUser._id;

      //ANA
      const userUnfollowing = await UserModel.findByIdAndUpdate(
        idUserUnfollowing,
        {
          $pull: { following: idUserUnfollowed },
        },
        {
          new: true,
        }
      );

      //BRUNO
      const userUnfollowed = await UserModel.findByIdAndUpdate(
        idUserUnfollowed,
        {
          $pull: { followers: idUserUnfollowing },
        }
      );

      return res.status(200).json(userUnfollowing);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
);

module.exports = router;
