const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post.controller");

router.get("/posts", PostController.all);
router.get("/post/:title", PostController.find);
router.post("/post/create", PostController.create);
router.put("/post/:title/update", PostController.update);
router.delete("/post/:id/delete", PostController.delete);
router.get("/post/:title/author", PostController.getAuthor);

module.exports = router;
