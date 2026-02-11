const express = require("express");
const { getAllBooks, getBookById, createBook } = require("../controllers/book.controller");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);

module.exports = router;
