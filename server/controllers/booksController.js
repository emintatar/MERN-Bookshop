const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: "Books fetched successfully",
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const addBook = async (req, res) => {
  const { title, desc, cover, price } = req.body;

  try {
    const newBook = new Book({
      title,
      desc,
      cover,
      price,
    });
    await newBook.save();
    res.status(201).json({
      message: "Book added successfully",
      book: newBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// put book
const updateBook = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBook = await Book.findOneAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
};
