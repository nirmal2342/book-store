<h1>📚 Online Bookstore – REST API </h1>

A complete RESTful API for an Online Bookstore built using Node.js, Express, MongoDB, and JWT Authentication. 
The API supports user management, book catalog, shopping cart, orders, and reviews. 

 <hr>

<h3>🚀 Live Demo </h3>

<b>Base URL: </b>
- https://book-store-1-oy6h.onrender.com/ 
 

<b> Swagger API Documentation: </b>
- https://book-store-1-oy6h.onrender.com/api-docs 

<hr>
<h3>🛠 Tech Stack 
</h3>

- Node.js 
- Express.js 
- MongoDB Atlas 
- Mongoose 
- JWT Authentication 
- Swagger (API Documentation) 
- Render (Deployment) 

 <hr>

📂 Project Structure 

```
backend/ 
│ 
├── src/ 
│   ├── config/        # Database & Swagger configuration 
│   ├── controllers/   # Business logic 
│   ├── middleware/    # Auth middleware 
│   ├── models/        # Mongoose schemas 
│   └── routes/        # API routes 
│ 
├── server.js          # Entry point 
├── app.js             # Express app setup 
└── package.json 
 ```

<hr> 

<h3>📌 Features </h3>

🔐 User Management 

- Register user 
- Login user (JWT authentication) 
- View profile 
- Update profile 

📚 Book Catalog 

- View all books 
- View book by ID 
- Add book (Admin/Protected) 
- Search & filter books 

🛒 Shopping Cart 

- Add book to cart 
- Update quantity 
- Remove from cart 
- View cart 

📦 Order Management 

- Place order 
- View order history 
- Cancel order 
- Track order status 

⭐ Reviews & Ratings 

- Add review 
- Rate book (1–5 stars) 
- View all reviews for a book 

🔑 Authentication 

This API uses JWT (JSON Web Token) for authentication. 

Protected routes require: 

Authorization: Bearer <your_token> 
 

 

⚙️ Environment Variables 

Create a .env file in the backend root: 

```
PORT=5000 
MONGO_URI=your_mongodb_connection_string 
JWT_SECRET=your_secret_key 
 
```
 <hr>

🧪 Running Locally 

1️⃣ Clone the Repository 

- git clone https://github.com/nirmal2342/book-store.git 
- cd book-store/backend 
 

2️⃣ Install Dependencies 

- npm install 
 

3️⃣ Run the Server 

Development mode: 

- npm run dev 
 

Production mode: 

- npm start 
 

Server runs at: 

- http://localhost:5000 
 

Swagger docs: 

- http://localhost:5000/api-docs 

 
