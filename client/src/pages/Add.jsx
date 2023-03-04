import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/books";

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, newBook);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form">
      <h1>Add New Book</h1>
      <input
        value={newBook.title}
        onChange={handleChange}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
      />
      <input
        value={newBook.desc}
        onChange={handleChange}
        type="text"
        name="desc"
        id="desc"
        placeholder="Description"
      />
      <input
        value={newBook.price}
        onChange={handleChange}
        type="text"
        name="price"
        id="price"
        placeholder="Price"
      />
      <input
        value={newBook.cover}
        onChange={handleChange}
        type="text"
        name="cover"
        id="cover"
        placeholder="Cover"
      />
      <button onClick={handleClick} type="submit">
        Add Book
      </button>
    </form>
  );
};

export default Add;
