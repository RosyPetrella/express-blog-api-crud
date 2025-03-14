const express = require("express");
const router = express.Router();
const posts = require("..//immagini_e_posts/posts");

//index
router.get("/", (req, res) => {
  res.json(posts);
});

//show
router.get("/:id", (req, res) => {
  res.send(`Show post with id: ${req.params.id}`);
});

//store
router.post("/", (req, res) => {
  res.send(`Create a new post`);
});

//update
router.put("/:id", (req, res) => {
  res.send(`Update post with id: ${req.params.id}`);
});

//modify
router.patch("/:id", (req, res) => {
  res.send(`Modify post with id: ${req.params.id}`);
});

//delete
router.delete("/:id", (req, res) => {
  res.send(`Delete post with id: ${req.params.id}`);
});
