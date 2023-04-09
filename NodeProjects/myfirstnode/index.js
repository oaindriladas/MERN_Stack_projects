var express= require('express');
var app = express();

//get-select * from emp 
//post-insert or write data into the database
app.get('/home',(request, response)=>{
response.write("Welcome home!");
response.end();
}).listen(5050,()=>{ console.log("Server running!");})