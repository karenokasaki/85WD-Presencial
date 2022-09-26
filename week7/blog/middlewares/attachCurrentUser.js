const UserModel = require("../models/User.model");

async function attachCurrentUser(req, res, next) {
  //pegar o _id que esta´no req.auth -> req.auth._id
  try {
    const loggedInUser = req.auth;

    const user = await UserModel.findById(loggedInUser._id, {
      passwordHash: 0,
    });

    req.currentUser = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Usuário não encontrado" });
  }
}

module.exports = attachCurrentUser;
