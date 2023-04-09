var express= require('express');
var app = express();
app.listen(5050,()=>{ console.log("Server running!");})
//get-select * from emp 
//post-insert or write data into the database
app.get('/',(request, response)=>{
response.write("Welcome home!");
response.write("Halleliuiah");
response.end();
})

app.get('/aboutus',(request,response)=>{
    response.send("<b>About us</b>");
})