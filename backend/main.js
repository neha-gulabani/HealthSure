module.exports = function (app) {
    
    // display main page
    // app.get("/mainpg", function (req, res) {
    //     res.render("mainpg.html");
    // });

    // display sign-up page
    // app.get("/signup", function (req, res) {
    //     res.render("signup.html");
    // });

    // display login page
    // app.get("/login", function (req, res) {
    //     res.render("login.html");
    // });

    // sign-up page: collect form data and insert into table 'users'
    app.post("/signed", function (req, res) {
        let newrecordE = [req.body.email];
        let newrecord = [req.body.firstname, req.body.lastname,
                        req.body.username, req.body.password,
                        req.body.email, req.body.contactno];

        let sqlquery = "SELECT * FROM users WHERE username = ?";
        let sqlquery1 = "INSERT INTO users VALUES (0,?,?,?,?,?,?)";

        db.query(sqlquery, newrecordE, (err, result) => {
            if (err) throw err;
            console.log(result.length);
            if (result.length != 0) {
                // res.send("User already exists");
                res.redirect("/mainPage");
            }
            else {
                db.query(sqlquery1, newrecord, (err, result) => {
                    if (err) {
                        return console.error(err.message);
                    } else {
                        // res.send("Created new user");
                        res.render("Home", { users: result });
                    }
                });
            }
        });
    });

    // login page: collect form data and insert into table 'users'
    app.post("/logined", function (req, res) {
        let newrecord = [req.body.username];

        let sqlquery = "SELECT * FROM users WHERE username = ?";
        
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) throw err;
            console.log(result.length);
            if (result.length == 0) {
                // res.send("User does not exist");
                res.redirect("/login");
            } 
            else {
                // res.send("Logged in");
                res.render("Home", { users: result });
            }
        });
    });

    // mood quiz page: collect form data and insert into table 'mood_emos'
    app.post("/mood_chosen", function (req, res) {
        let newrecord = [req.body.mood, req.body.planet];

        let sqlquery = "INSERT INTO mood_emos VALUES (0,?,?)";

        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                res.redirect("/MoodQuiz");
            }
            // res.send(result);
            res.render("MoodReport", { mood_emos: result });
        });
    })
}
