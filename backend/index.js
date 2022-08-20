const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3001;

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, "192.168.18.6", () => 
  console.log(`Example app listening on port ${port}!`)
);

app.get("/", function (req, res) {
    res.send("hello");
});

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

// sign up page: collect form data and insert into table 'users'
app.post("/signed", function (req, res) {
  let newrecordE = [req.body.email];
  let newrecord = [req.body.firstname, req.body.lastname,
                  req.body.username, req.body.password,
                  req.body.email, req.body.contact];

  let sqlquery = "SELECT * FROM users WHERE email = ?";
  let sqlquery1 = "INSERT INTO users VALUES (0,?,?,?,?,?,?)";

  db.query(sqlquery, newrecordE, (err, result) => {
      if (err) throw err;
      console.log(result.length);
      if (result.length != 0) {
        console.log("User already exists");
      }
      else {
          db.query(sqlquery1, newrecord, (err, result) => {
              if (err) {
                  return console.error(err.message);
              } else {
                  console.log("User successfully added to database");
                  res.send("True");
              }
          });
      }
  });
  
});

// login page: collect form data and search table 'users'
app.post("/logined", function (req, res) {
  let newrecord = [req.body.email];
  let sqlquery = "SELECT * FROM users WHERE email = ?";
  
  db.query(sqlquery, newrecord, (err, result) => {
      if (err) throw err;
      console.log(result.length);
      if (result.length == 0) {
          console.log("User does not exist");
      } 
      else {
        console.log("Logged in");
        res.send("True");
      }
  });
});

// mood quiz page: collect form data and insert into table 'mood_emos'
app.post("/mood_chosen", function (req, res) {
  console.log(req.body.mood);
  let newrecord = [req.body.mood, req.body.colour,
                  req.body.date, req.body.email];
  let sqlquery = "INSERT INTO moods VALUES (0,?,?,?,?)";

  db.query(sqlquery, newrecord, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    else {
      console.log("Mood successfully added to database");
    }
  });
});
