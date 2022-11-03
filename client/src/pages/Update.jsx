import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log(bookId);

  const [book, setBook] = useState({
    title: "",
    desc: "",
    pic: ""
  });

  const handelChange = (e) => {
    setBook((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/v1/books/${bookId}`,book);
      navigate("/");

    } catch (error) {

      console.log(error);

    }
  };

  console.log(book);
  return (
    <div>
      <h1 style={{ textAlignLast: "center" }}>Update Book</h1>
      <form>
        <input type="text" placeholder='Enter Title' name='title' onChange={handelChange} />
        <input type="text" placeholder='Enter Description' name='desc' onChange={handelChange} />
        {/* <input type="file" name="pic" id="" accept='image/*' placeholder='Choose a File' onChange={handelChange} /> */}
        <input type="text" name="pic" id="" placeholder='Choose a File' onChange={handelChange} />
        <button type="submit" onClick={handelSubmit}>Update</button>
      </form>
    </div>
  );
};

export default Update;