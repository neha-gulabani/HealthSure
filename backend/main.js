module.exports = function (app) {
  // display main page
  app.get("/mainpg", function (req, res) {
    res.render("mainpg.html");
  });

  // display sign-up page
  app.get("/signup", function (req, res) {
    res.render("signup.html");
  });

  // display login page
  app.get("/login", function (req, res) {
    res.render("login.html");
  });

  // sign-up page: collect form data and insert into table 'users'
  app.post("/signed", function (req, res) {
    let newrecord = [
      req.body.firstname,
      req.body.lastname,
      req.body.username,
      req.body.email,
      req.body.contactno,
    ];
    // let hashedpw = await bcrypt.hash(req.body.password, 10);

    let sqlquery = "SELECT * FROM 'users' WHERE username like ?";
    let sqlquery1 = "INSERT INTO users VALUES ('?','?','?','?','?','?')";

    db.query(sqlquery, newrecord, (err, result) => {
      if (err) throw err;
      if (result.length != 0) {
        res.send("User already exists");
        res.redirect("/login");
      } else {
        db.query(sqlquery1, newrecord, (err, result) => {
          if (err) {
            return console.error(err.message);
          } else {
            res.send("Created new user");
            res.render("homepage.html", { users: result });
          }
        });
      }
    });
  });

  // login page: collect form data and insert into table 'users'
  app.post("/logined", function (req, res) {
    let uname = [req.body.username];
    let passw = [req.body.password];

    let sqlquery = "SELECT * FROM 'users' WHERE username like ?";

    db.query(sqlquery, uname, passw, (err, result) => {
      if (err) {
        res.send("No such user logged in");
        res.redirect("/login");
      }
      // else {
      //     let hashedpw = result[0].passw;
      //     if (await bcrypt.compare(passw, hashedpw)) {
      //         res.render("homepage.html", { users: result });
      //     }
      //     else {
      //         res.send("Invalid password");
      //         res.redirect("/login");
      //     }
      // }
    });
  });
};
