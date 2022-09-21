const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");
const PostModel = require("../models/Post.model");
const CommentModel = require("../models/Comment.model");

router.post("/create/:idPost/:idAuthor", async (req, res) => {
  try {
    const { idPost, idAuthor } = req.params;

    const newComment = await CommentModel.create({
      ...req.body,
      author: idAuthor,
      post: idPost,
    })

    await PostModel.findByIdAndUpdate(idPost, {
      $push: {
        comments: newComment._id,
      },
    });

    

    return res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
