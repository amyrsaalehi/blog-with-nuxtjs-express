const mongoose = require("mongoose");
const Author = require("./author.model");
require("dotenv/config");

const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PostSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
