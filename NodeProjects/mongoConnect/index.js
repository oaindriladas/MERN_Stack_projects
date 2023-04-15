let express= require('express');
let app= express();
let mongo = require('mongoose');
let managerModel = require('./schema');

app.listen(3000,() =>{ console.log("Running");})

mongo.connect('mongodb://127.0.0.1:27017',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{ console.log("Connected to MongoDB");})
.catch((error)=>{ console.log(error);})