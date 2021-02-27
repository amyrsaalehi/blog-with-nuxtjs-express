const AuthorModel = require("../models/author.model");

const AuthorController = {
  find: async (req, res) => {
    const author = await AuthorModel.findOne({ name: req.params.name });
    res.status(200).json(author);
  },
  all: async (req, res) => {
    const allAuthors = await AuthorModel.find();
    res.status(200).json(allAuthors);
  },
  create: async (req, res) => {
    const newAuthor = new AuthorModel(req.body);
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  },
  update: async (req, res) => {
    const author = await AuthorModel.findOneAndUpdate(
      {
        name: req.params.name,
      },
      req.body,
      { new: true }
    );
    res.status(200).json(author);
  },
  delete: async (req, res) => {
    const author = await AuthorModel.findByIdAndDelete(req.params.id);
    res.status(200).json(author);
  },
  getAllPosts: async (req, res) => {
    AuthorModel.findOne({ name: req.params.name })
      .populate("posts")
      .exec((err, author) => {
        if (err) return res.status(404).json("Boro baba!");

        res.status(200).json(author.posts);
      });
  },
};

module.exports = AuthorController;
