import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  const API_URL = "http://localhost:5000/books";

  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      getAllBooks();
    } catch (error) {
      console.error(error);
    }
  };

  async function getAllBooks() {
    try {
      const response = await axios.get(API_URL);
      setAllBooks(response.data.books);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="books">
      <h1>Bookshop App</h1>
      <div className="bookList">
        {allBooks.map((book, index) => (
          <div key={index} className="book">
            {book.cover && <img src={book.cover} alt="bookCover" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button onClick={() => deleteBook(book._id)} className="deleteBtn">
              Delete
            </button>
            <button className="updateBtn">
              <Link className="updateLink" to={`/update/${book._id}`}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="addBtn">
        <Link className="addNewLink" to="/add">
          Add New Book
        </Link>
      </button>
    </div>
  );
};

export default Books;
