const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Online Bookstore API",
      version: "1.0.0",
      description: "REST API documentation for Online Bookstore (MERN Project)",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://book-store-1-oy6h.onrender.com/"
            : "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Scan route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
