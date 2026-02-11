const express = require("express");
const { addReview, getBookReviews } = require("../controllers/review.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Book Review APIs
 */

/**
 * @swagger
 * /api/reviews/{bookId}:
 *   post:
 *     summary: Add review to a book
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rating
 *               - comment
 *             properties:
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review added
 */

/**
 * @swagger
 * /api/reviews/{bookId}:
 *   get:
 *     summary: Get reviews for a book
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews
 */


router.post("/:bookId", protect, addReview);
router.get("/:bookId", getBookReviews);

module.exports = router;
