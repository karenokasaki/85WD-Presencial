const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");
const PostModel = require("../models/Post.model");

router.post("/create/:idAuthor", async (req, res) => {
  try {
    const { idAuthor } = req.params;

    const newPost = await PostModel.create({ ...req.body, author: idAuthor });

    const author = await UserModel.findByIdAndUpdate(
      idAuthor,
      {
        $push: { posts: newPost._id },
      },
      { new: true }
    );

    return res.status(201).json([newPost, author]);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/post/:idPost", async (req, res) => {
  try {
    const { idPost } = req.params;

    const post = await PostModel.findById(idPost)
      .populate("comments")
      .populate({
        path: "comments",
        populate: {
          path: "author",
          model: "User",
        },
      });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
