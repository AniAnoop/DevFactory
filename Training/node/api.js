const { json } = require("express");
const express = require("express");
const app = express();
const port = 8000;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "matrimony",
});

con.connect(function (err, result) {
  if (err) console.log(err);
});
app.use(express.json());

app.post("/", function (req, res) {
  con.query("select * from tblusers", function (err, result) {
    if (err) {
      // console.log(err);
      res.send(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});

app.post("/signup", function (req, res) {
  // var a=JSON.stringify(req.body);
  // console.log("request==>"+a)

  // res.send("")
  con.query(
    "insert into tblusers(txtprofilefor,txtname,txtmobileno) values('" +
      req.body.profilefor +
      "','" +
      req.body.name +
      "','" +
      req.body.mobileno +
      "')",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
app.post("/login", function (req, res) {
    console.log("name==>"+req.body.name)
    console.log("password==>"+req.body.password)
    var sql="select id from tblusers where txtname='" +
        req.body.name +
        "' and txtpassword='" +
        req.body.password +
        "'";
        console.log("sql=>"+sql)
    res.send("")
//    
//     console.log(sql)
//   con.query(
//     sql,
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         res.send(err);
//       } else {
//         console.log(result);
//         res.send(result);
//       }
//     }
//   );
});
app.post("/register", function (req, res) {
  con.query(
    "update tblusers set dDOB='" +
      req.body.dob +
      "',txtreligion='" +
      req.body.religion +
      "',txtcaste='" +
      req.body.caste +
      "',mothertoungue='" +
      req.body.mothertoungue +
      "',txtemail='" +
      req.body.email +
      "',txtpassword='" +
      req.body.password +
      "',subcaste='" +
      req.body.subcaste +
      "' where id",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
app.post("/search", function (req, res) {
  con.query(
    "select id,txtname,dDOB,txtreligion from tblusers where txtname like '" +
      req.body.name +
      "' ",
    function (err, result) {
      if (err) {
        // console.log(err);
        res.send(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});
app.post("/", function (req, res) {
    con.query("select * from tblusers", function (err, result) {
      if (err) {
        // console.log(err);
        res.send(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    });
  });
  
  app.post("/profile", function (req, res) {
    // var a=JSON.stringify(req.body);
    // console.log("request==>"+a)
  
    // res.send("")
    con.query(
      "select id,txtname,txtmobileno,txtprofilefor,txtpassword,txtemail,txtreligion,txtcaste,subcaste,dDOB,mothertoungue,reflanguage,txtgender from tblusers",
      function (err, result) {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  });
  

// app.get("/signup",function(req,res)
// {
//     res.send("signup api");
// });
app.listen(port, function () {
  console.log("server is running");
});
