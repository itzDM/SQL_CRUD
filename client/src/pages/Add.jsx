import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate();

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
      await axios.post("http://localhost:5001/api/v1/books", book);
      navigate("/");

    } catch (error) {

      console.log(error);

    }
  };

  console.log(book);
  return (
    <div>
      <h1 style={{ textAlignLast: "center" }}>Add Book</h1>
      <form>
        <input type="text" placeholder='Enter Title' name='title' onChange={handelChange} />
        <input type="text" placeholder='Enter Description' name='desc' onChange={handelChange} />
        {/* <input type="file" name="pic" id="" accept='image/*' placeholder='Choose a File' onChange={handelChange} /> */}
        <input type="text" name="pic" id="" placeholder='Choose a File' onChange={handelChange} />
        <button type="submit" onClick={handelSubmit}>ADD</button>
      </form>
    </div>
  );
};

export default Add;