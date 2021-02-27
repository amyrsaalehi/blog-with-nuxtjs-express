const mongoose = require("mongoose");
const Post = require("./post.model");
require("dotenv/config");

const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const AuthorSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model("Author", AuthorSchema);
