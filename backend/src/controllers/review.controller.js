const Review = require("../models/Review.model");
const Book = require("../models/Book.model");


// Add Review
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const bookId = req.params.bookId;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const review = await Review.create({
      book: bookId,
      user: req.user._id,
      rating,
      comment
    });

    res.status(201).json(review);

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "You already reviewed this book" });
    }
    res.status(500).json({ message: error.message });
  }
};


// Get All Reviews For Book
exports.getBookReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId })
      .populate("user", "name email");

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
