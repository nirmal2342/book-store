const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./app");

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();
