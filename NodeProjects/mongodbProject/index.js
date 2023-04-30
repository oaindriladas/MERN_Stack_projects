let express = require('express');
let mongoose= require('mongoose');
let app = express();
let managerschema = require('./schema');
app.use(express.json()); //we want to tell the server that accept request in JSON format
//middleware
app.listen(3030,()=>{ console.log("Server running");})

app.get('/',(request, response) => {
response.write("Express server created");
response.end();
})

mongoose.connect('mongodb://127.0.0.1:27017/organization',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( console.log("Connected to MongoDB"))
.catch((error)=> { console.log(error);})

app.post('/addman',(request, response)=>{
    try{ //adding document into mongodb collection
        let new_manager = new managerschema(request.body);
        new_manager.save();
        response.status(200).json(new_manager);
    }
    catch(error){
        response.status(400).send(error);
    }    
})

app.get('/managers',async (request, response) => {
    try{  //fetch data from the database
        let managers = await managerschema.find();
        response.json(managers);
    }
    catch(error){
    response.send(error);
    }
})

app.get("/managers/:id", async(request, response) => {
    try{
        let manager =await managerschema.findById(request.params.id);
    // let manager= await managerschema.findOne({_id: request.params.id});    
        if(manager!= null)
        {
            response.json(manager);
        }
        else{
            response.status(404).send("Manager not found!");
        }
    }
    catch(error){
        response.send({ message: error.message});
    }

})

app.patch("/update/:id", async (req, res)=>{
    try{
        let manager= await managerschema.findByIdAndUpdate( req.params.id,
            req.body, {new: true});
        if(manager!=null){
            res.json(manager);
        }
        else { res.send("Manager not found!"); }
    }
    catch(error){
        res.send({message: error.message});
    }
})

app.delete("/delete/:id", async(req, res)=>{
try{
    let manager = await managerschema.findByIdAndDelete(req.params.id);
    if(manager==null)
    {
        res.send("Not found & deleted");
    }
    else{
        res.json(manager);
    }
}
catch(error){ res.send({message: error.message}); }
})

