const express=require('express')
const app=express()
const port=8000
var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"matrimony"
});


con.connect(function(err,result){
    if(err) 
    console.log(err)
   
});

app.get('/',function(req,res){
    con.query("select * from tblusers",function(err,result){
            if(err)
            {
            // console.log(err);
            res.send(err);
            }
            else{
                // console.log(result);
                res.send(result);
            }
        });
    });
    
    app.get('/signup',function(req,res){
        con.query("insert into tblusers(txtname,txtmobileno) values('archana','126546')",function(err,result){
                if(err)
                {
                 console.log(err);
                res.send(err);
                }
                else{
                     console.log(result);
                    res.send(result);
                }
            });
        });
        app.get('/login',function(req,res){
            con.query("select * from tblusers where txtname='anjana' and txtpassword='123'",function(err,result){
                    if(err)
                    {
                     console.log(err);
                    res.send(err);
                    }
                    else{
                        console.log(result);
                        res.send(result);
                    }
                });
            });
            app.get('/register',function(req,res){
                con.query("update tblusers set dDOB='1980-12-02',txtprofilefor='self',txtreligion='christian',txtcaste='general',mothertoungue='malayalam',txtemail='anjana@gmail.com',txtpassword='123',reflanguage='2' where id=9;",function(err,result){
                        if(err)
                        {
                         console.log(err);
                        res.send(err);
                        }
                        else{
                             console.log(result);
                            res.send(result);
                        }
                    });
                });
            
    
    
// app.get("/signup",function(req,res)
// {
//     res.send("signup api");
// });
app.listen(port,function(){
    console.log("server is running");
 });