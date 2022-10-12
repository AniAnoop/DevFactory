const { json } = require("express");
const express = require("express");
const app = express();
const port = 8000;
var mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "association",
});

con.connect(function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});

app.post("/login", function (req, res) {
  // console.log("hi");
  var sql =
    "select id from tblusers where txtUemail='" +
    req.body.mail +
    "' or txtUphoneno='" +
    req.body.mail +
    "' and txtUpassword='" +
    req.body.password +
    "'";
  // var sql="select id from tblusers where txtUemail='michael@gmail.com' or txtUphoneno='111111' and txtUpassword='992312'";
  if (req.body.mail == "") {
    console.log("username empty");
    res.send("username empty");
  } else if (req.body.password == "") {
    console.log("passeord empty ");
    res.send("password empty");
  } else {
    con.query(sql, function (err, result) {
      if (result.length > 0) {
        console.log("result==>" + JSON.stringify(result));
        res.send(result);
      } else {
        console.log("incorrext username or password");
        // res.send(err);
        res.send("incorrext username or password");
      }
    });
  }
});

app.post("/communityinsert", function (req, res) {
  // var sql="insert into tblassociation(txtAssociationname,txtAcronim,refAssotype,txtEmail,txtPhonenumber,txtpostalno,txtAssodetails,txtWebsiteurl,txtHqaddress,txtBranches,txtDescription) values('Tata','Tata','2','tata@gmail.com','12325','682058','FFF','www.tata.com','HQFFF','Hydrabad','FFF123')"
  var sql =
    "insert into tblassociation(txtAssociationname,txtAcronim,refAssotype,txtEmail,txtPhonenumber,txtpostalno,txtAssodetails,txtWebsiteurl,txtHqaddress,txtBranches,txtDescription) values ('" +
    req.body.assoname +
    "','" +
    req.body.acronim +
    "','" +
    req.body.refassotype +
    "','" +
    req.body.email +
    "','" +
    req.body.phoneno +
    "','" +
    req.body.postalno +
    "','" +
    req.body.assodetails +
    "','" +
    req.body.website +
    "','" +
    req.body.hq +
    "','" +
    req.body.branch +
    "','" +
    req.body.description +
    "')";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      // res.send("registration failed");
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
      res.send("registration sucess");
    }
  });
});

app.post("/fetchcommunity",function(req,res){
  // console.log("hi");
  var sql="select a.id,a.txtAssociationname,a.txtAcronim,t.txtAssotype,a.txtEmail,a.txtPhonenumber,a.txtAssodetails,a.txtWebsiteurl,a.txtHqaddress,a.txtBranches,a.txtDescription from tblassociation a join tblassotype t on a.refAssotype=t.id";
  con.query(sql,function(err,result){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
});

app.post("/exitcommunity",function(req,res){
  var sql="update tblassociationmap set txtDeleteflag='1' where id='"+req.body.id+"'";
  con.query(sql,function(err,result){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
})

app.post("/resendotp",function(req,res){
  function betweenRandomnumber(min,max){
    return Math.floor(
      Math.random()*(max-min+1)+min
    )
  }
  var otp=betweenRandomnumber(100000,999999);
  console.log("6 digit==>"+ otp );
  var sql="update tblusers set txtOtp='"+otp+"' where id='"+req.body.id+"'";

  con.query(sql,function(err,result){
if(err){
      console.log(err);
      res.send(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
  
})

app.listen(port, function () {
  console.log("server is running");
});
