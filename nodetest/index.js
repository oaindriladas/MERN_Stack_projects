let express= require('express');
let app= express();
let sql= require('mssql');

app.listen(3000, ()=> { console.log("App listening to port 5000");})
var config={
    user:'sa',
    password:'password@123',
    server:'TLMUGGCORPL0237\\SQLSERVER2022',
    database: 'company',
    options: {
        encrypt: false,
        useUTC: true
    }
}

app.get('/', (req,res)=>{
    res.send("End point working!")
})

sql.connect(config, function(error){
    if(error)
    console.log(error)
    else
    console.log("Connected to SQL");
})

app.get('/reademp', function(req, res){
    var request = new sql.Request();
    request.query('select * from employee',(recordset, error)=>{
        if(error)
        console.log(error)
        else
        res.send(recordset);
    })
})

app.post('/insertemp', function(req,res){
    var request = new sql.Request();
    request.query(`insert into employee values(90, 'Rushabh',350000,'2000-03-27',101)`,
    (recordset, error) => {
    if(error)
    console.log(error)
    else
    res.send(recordset);
    })
})