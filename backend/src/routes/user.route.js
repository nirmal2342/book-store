const express = require("express");
const {
  getUserProfile,
  updateUserProfile
} = require("../controllers/user.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Profile APIs
 */

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get logged-in user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 */

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated
 */


router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
