let express= require('express');
let app= express();
let mongo = require('mongoose');
let managerModel = require('./schema');
app.use(express.json());

app.listen(3000,() =>{ console.log("Running");})

const connect = mongo.connect('mongodb://127.0.0.1:27017/organization',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{ console.log("Connected to MongoDB");})
.catch((error)=>{ console.log(error);})

app.get('/emp', (request, response)=> {
    let employees = managerModel.find({});
    try{
        response.send(employees);
    }
    catch(error){
        response.status(500).send(error);
    }
})

app.post('/postemp',(req, res) => {
    let emp = new managerModel(req.body);
    try{
        emp.save();
        res.send(emp);
    }
    catch(error){ res.status(500).send(error); }
})