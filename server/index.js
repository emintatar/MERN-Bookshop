const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;
const hostname = "127.0.0.1";

const MONGO_URL = `mongodb://${hostname}/bookshopdb`;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "This is home route!",
  });
});

const books = require("./routes/booksRouter");
app.use("/", books);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
