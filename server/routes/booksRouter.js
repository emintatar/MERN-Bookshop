const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/books", booksController.getBooks);

router.post("/books", booksController.addBook);

router.delete("/books/:id", booksController.deleteBook);

router.put("/books/:id", booksController.updateBook);

module.exports = router;
