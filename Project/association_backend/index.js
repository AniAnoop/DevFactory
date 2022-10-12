const { json } = require("express");
const express = require("express");
const app = express();
const port = 8000;
var mysql = require("mysql");
const cors = require("cors");
app.use(cors());
/*************** */
app.use(express.json());
const { isNull } = require("util");
const jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "hello");
const res = require("express/lib/response");

/******************** */
var con = mysql.createConnection({
  //  host: "database-1.cb320kb0xyg5.us-west-1.rds.amazonaws.com",
  host: "localhost",
  user: "root",
  password: "password",
  // user: "admin",
  // password: "imstrong",
  database: "matrimony",
});

con.connect(function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});
// app.use(express.json());
/******************************* */

function verifyToken(req, res, next) {
  console.log("Req" + JSON.stringify(req.body));
  const bearerHeader = req.headers["authorization"];
  console.log(JSON.stringify(bearerHeader));
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "secretkey", (err, authData) => {
      if (err) res.sendStatus(403);
      else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

/************************************* */

app.post("/", verifyToken, function (req, res) {
  console.log("api for ==>" + JSON.stringify(req));
  con.query("select * from tblusers", function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);
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
  // console.log("name==>"+req.body.name)
  // console.log("password==>"+req.body.password)
  // var sql="select id from tblusers where txtname='" +
  //     req.body.name +
  //     "' and txtpassword='" +
  //     req.body.password +
  //     "'";
  //     console.log("sql=>"+sql)
  // res.send("")
  //
  //  console.log(sql)
  con.query(
    "select id from tblusers where txtname='" +
      req.body.name +
      "' and txtpassword='" +
      req.body.password +
      "'",
    function (err, result) {
      // if (err) {
      //   console.log(err);
      //   res.send(err);
      // } else {
      // console.log("result1==>"+JSON.stringify(result));
      // res.send(result);
      if (result.length > 0) {
        console.log("result" + JSON.stringify(result));
        const usr = result[0];
        console.log("usr" + JSON.stringify(usr));
        jwt.sign({ user: usr }, "secretkey", (err, token) => {
          console.log("error=>" + err);
          console.log("token==>" + token);
          if (err) res.send(err);
          res.json({ token: token });
          // console.log("Hello==>   "+token);
        });
      } else {
        res.json({ token: "" });
      }
    }

    // }
  );
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
      req.body.mothertongue +
      "',txtemail='" +
      req.body.email +
      "',txtpassword='" +
      req.body.password +
      "',subcaste='" +
      req.body.subcaste +
      "' where id='1'",
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
    "select id,txtname,txtprofilefor,txtreligion,txtgender,dDOB,mothertoungue,subcaste from tblusers where txtname like '" +
      req.body.name +
      "%' ",
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
// app.post("/", function (req, res) {
//   con.query("select * from tblusers", function (err, result) {
//     if (err) {
//       // console.log(err);
//       res.send(err);
//     } else {
//       // console.log(result);
//       res.send(result);
//     }
//   });
// });

app.post("/profile", function (req, res) {
  // var a=JSON.stringify(req.body);
  // console.log("request==>"+a)

  // res.send("")
  con.query(
    "select id,txtname,txtmobileno,txtprofilefor,txtpassword,txtemail,txtreligion,txtcaste,subcaste,dDOB,mothertoungue,reflanguage,txtgender from tblusers where id=" +
      req.body.id +
      "",
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
app.post("/religion", verifyToken, function (req, res) {
  console.log("religion");
  console.log("req in api" + JSON.stringify(req));
  con.query(
    "select religion_id,religion from tblreligion",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("religion !!", result);
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
