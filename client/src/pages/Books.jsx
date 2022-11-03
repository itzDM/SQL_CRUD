import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {

        const res = await axios.get("http://localhost:5001/api/v1/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }

    };

    getData();

  }, []);
  const handelDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:5001/api/v1/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);

    }

  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: 5 }}>Books Store</h1>
      <div className="book">
        {books.map((book) => (
          <div className="cont" key={book.id}>
            {book.pic && <img src={book.pic} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <div className="delete">
              <button onClick={() => handelDelete(book.id)}>Delete</button>
              <button> <Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
          </div>
        ))}
      </div>
      <button><Link to="/add">Add More</Link></button>

    </div>
  );
};

export default Books;