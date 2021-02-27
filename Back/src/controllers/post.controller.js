const PostModel = require("../models/post.model");
const AuthorModel = require("../models/author.model");

const PostController = {
  find: async (req, res) => {
    const post = await PostModel.findOne({ title: req.params.title });
    res.status(200).json(post);
  },
  all: async (req, res) => {
    const allPosts = await PostModel.find();
    res.status(200).json(allPosts);
  },
  create: async (req, res) => {
    
    const newPost = new PostModel(req.body);
    if (req.body.author) {
      const author = await AuthorModel.findOne({ _id: req.body.author });
      await AuthorModel.findOneAndUpdate(
        {
          _id: req.body.author,
        },
        {
          posts: [...author.posts, newPost._id],
        }
      );
    }
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  },
  update: async (req, res) => {
    const post = await PostModel.findOneAndUpdate(
      {
        title: req.params.title,
      },
      req.body,
      { new: true }
    );
    res.status(200).json(post);
  },
  delete: async (req, res) => {
    const post = await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json(post);
  },
  getAuthor: async (req, res) => {
    PostModel.findOne({ title: req.params.title })
      .populate("author")
      .exec((err, post) => {
        if (err) return res.status(404).json("Boro baba!");

        res.status(200).json(post.author);
      });
  },
};

module.exports = PostController;
