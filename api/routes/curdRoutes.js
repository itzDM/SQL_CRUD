import express from "express";
import { createData, deleteData, getBooks, updateData } from "../controller/curdController.js";

const router = express.Router();

router.get("/books", getBooks);
router.post("/books", createData);
router.delete("/books/:id", deleteData);
router.put("/books/:id", updateData);

export default router;