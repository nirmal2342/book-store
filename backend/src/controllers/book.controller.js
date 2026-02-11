const Book = require("../models/Book.model");

/**
 * @desc    Get all books (Search + Filter + Pagination)
 * @route   GET /api/books
 */
exports.getAllBooks = async (req, res) => {
  try {
    const {
      keyword,
      genre,
      minPrice,
      maxPrice,
      minRating,
      page = 1,
      limit = 10
    } = req.query;

    let query = {};

    // Search by title or author
    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { author: { $regex: keyword, $options: "i" } }
      ];
    }

    // Filter by genre
    if (genre) {
      query.genre = genre;
    }

    // Price filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Rating filter
    if (minRating) {
      query.rating = { $gte: Number(minRating) };
    }

    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Book.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      books
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Get single book
 * @route   GET /api/books/:id
 */
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Create new book
 * @route   POST /api/books
 */
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Update book
 * @route   PUT /api/books/:id
 */
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Delete book
 * @route   DELETE /api/books/:id
 */
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
