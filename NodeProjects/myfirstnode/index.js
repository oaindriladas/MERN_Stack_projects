var express= require('express');
var app = express();
var student= require('./student')

app.listen(5050,()=>{ console.log("Server running!");})
//get-select * from emp 
//post-insert or write data into the database
app.get('/',(request, response)=>{
// response.write("Welcome home!<br>");
// response.write(student[0].sid.toString());
response.json(student);
response.end();
})

app.get('/aboutus',(request,response)=>{
    response.send("<b>About us</b>");
})