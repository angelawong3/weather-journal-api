// import express
const express = require("express");

// declare a PORT heroku or 3001
const PORT = process.env.PORT || 3001;

// create an app instance using express
const app = express();

const foo = (req, res, next) => {
  req.foo = "bar";

  next();
};

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(foo);

app.get("/", (req, res) => {
  res.send("hello");
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
