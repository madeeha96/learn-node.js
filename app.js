const express = require("express"),
  mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/bookapi");
var Book = require("./models/bookModel");

const app = express();

const port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route("/Books").get((req, res) => {
  Book.find((err, books) => {
    if (err) {
      console.log("err", err);
    } else {
      res.json(books);
    }
  });
});

app.use("/api", bookRouter);
app.get("*", (req, res) => {
  res.send(`Welcome to my API`);
});
app.listen(port, () => console.log(`Gulp is running on my app:${port}`));
