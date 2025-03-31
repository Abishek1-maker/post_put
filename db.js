const mysql=require('mysql');
//create connecction with authentication
 const  connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"learning"
});
//connect to database
connection.connect((err)=>{
    if(err) throw err;
    console.log('connected to my sql')
});
//createtable
const createUsersql = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), email VARCHAR(255), username VARCHAR(255))";

//query is request for data or action from a database
connection.query(createUsersql,(err)=>{
    if(err) throw err; //after err,data=>data is like res/result we can add
    console.log("table created succesfully")

});
module.exports={connection}  ;  

