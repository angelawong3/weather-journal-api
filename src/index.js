// import express
const express = require("express");

const routes = require("./routes");

// declare a PORT heroku or 3001
const PORT = process.env.PORT || 3001;

// create an app instance using express
const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// listen for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
