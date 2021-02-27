const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/author.controller");

router.get("/authors", AuthorController.all);
router.get("/author/:name", AuthorController.find);
router.post("/author/create", AuthorController.create);
router.put("/author/:name/update", AuthorController.update);
router.delete("/author/:id/delete", AuthorController.delete);
router.get("/author/:name/posts", AuthorController.getAllPosts);

module.exports = router;
