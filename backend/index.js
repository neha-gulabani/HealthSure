const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 19006;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "healthsure",
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

global.db = db;
