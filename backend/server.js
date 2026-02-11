const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./app");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
