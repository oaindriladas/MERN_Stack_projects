let express= require('express');
let app = express();
let sql = require('mssql');

app.listen(3030, () =>{ console.log("Server is running on 3030!") })

app.get('/', function(request, response){
    response.write("This is the home page");
    response.end();
})

let config={
    user: 'sa',
    password: 'password@123',
    server: 'TLMUGGCORPL0237\\SQLSERVER2022',
    database: 'company',
    options: {
        encrypt: false,
        useUTC: true
    }
}

sql.connect(config, function(error){
    if(error)
    console.log(error);
    else
    console.log("SQL connected");
})

app.get('/viewemp', function(request, response){
    let req= new sql.Request();
    req.query('select * from employee',function(records, error){
        if(error)
        console.log(error)
        else
        response.send(records);
    })
})

app.post('/insertemp', function(request,response){
    let req= new sql.Request();
    req.query(`insert into employee values(31,'John',990000,'1990-09-18',102)`,
    (recordset, error)=>{
if(error)
console.log(error)
else
response.send(recordset);
    })
})

app.post('/update', function(request, response){
    let req= new sql.Request();
    req.query(`update employee set empname='Elena' where empid=${request.params.id}`,
    (recordset,error)=>{
        if(error)
        {
            console.log(error);
            console.log(request.params.id);
        }
        else
        response.send(recordset);
    })
})


