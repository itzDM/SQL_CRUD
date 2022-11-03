import { db } from "../config/dbConnect.js";


// READ Data

export const getBooks = (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return err.message;
        res.status(200).json(data);
    });

};

// CReate  DAta


export const createData = (req, res) => {
    const q = "insert into books (`title`,`desc`,`pic`) values (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.pic
    ];

    db.query(q, [values], (err, data) => {

        if (err) return res.status(400).json(err.message);

        return res.json("Data Created");

    });


};


// Delete Data

export const deleteData = (req, res) => {
    const bookId = req.params.id;
    const q = "delete from books where id = ? ";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json("Book Deleted");
    });


};

// UPdate Data

export const updateData = (req, res) => {
    const bookId = req.params.id;
    const q = "Update books set `title`=?,`desc`=?,`pic`=? where id= ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.pic
    ];
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json("Book Updated");
    });


};