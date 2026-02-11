const express = require("express");
const { addReview, getBookReviews } = require("../controllers/review.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/:bookId", protect, addReview);
router.get("/:bookId", getBookReviews);

module.exports = router;
