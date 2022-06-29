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
    else{
        con.query("select * from student",function(err,result)
       {
        if(err)
        console.log(err)
        else{
            console.log(result)
        }
       } )
    }
}

);