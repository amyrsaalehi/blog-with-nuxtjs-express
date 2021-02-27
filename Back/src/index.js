const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv/config");

const authorRoutes = require("./routes/author.route");
const postRoutes = require("./routes/post.route");

const Port = process.env.PORT || 3000;
const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.info(
    `Method: ${req.method}\nStatusCode: ${res.statusCode}\nURL: ${req.originalUrl}\n\n\n`
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTE
app.use(postRoutes);
app.use(authorRoutes);

// STATIC
app.use(express.static("public"));

// HANDLER FOR 404
app.use((req, res, next) => {
  res.status(404).send("You've been lost probably!");
});

// HANDLER FOR 500
app.use((err, req, res, next) => {
  console.log(err.stack);

  res.sendFile(path.join(__dirname, "../public/500.htm"));
});

app.listen(Port, () => console.log(`Server is running on PORT: ${Port}`));
