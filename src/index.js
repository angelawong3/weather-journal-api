require("dotenv").config();

// import express
const express = require("express");
const mysql2 = require("mysql2/promise");

const routes = require("./routes");
const dbMiddleware = require("./middleware/db");

const init = async () => {
  try {
    // declare a PORT heroku or 3001
    const PORT = process.env.PORT || 3001;

    const dbConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };

    // connect to db
    const db = await mysql2.createConnection(dbConfig);

    // create an app instance using express
    const app = express();

    // add middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(dbMiddleware(db));
    app.use(routes);

    // listen for requests
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
