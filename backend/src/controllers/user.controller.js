const User = require("../models/User.model");

/**
 * @desc    Get logged-in user profile
 * @route   GET /api/users/profile
 */
exports.getUserProfile = async (req, res) => {
  res.json(req.user);
};


/**
 * @desc    Update logged-in user profile
 * @route   PUT /api/users/profile
 */
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role
      });

    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
