let express= require('express');
let app= express();
app.use(express.json());
let bcrypt = require('bcrypt'); //encrypt the password, acts as a middleware
let mongoose = require('mongoose');
app.listen(3030, console.log("Server is running!"));
let usermodel = require('./userSchema');

mongoose.connect('mongodb://127.0.0.1:27017/organization',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( console.log("Connected to MongoDB"))
.catch((error)=> { console.log(error);})

/*
password: test123
gensalt()
salt+password = gdahgahasdg.hdahqiuIQRY$hksdhfhfdskj

gensalt() password+salt --> changedPassword --- creating a new user
compare() password, changedPassword --- authenticate the user & authorise to view the data
*/

app.post('/adduser', async(req, res)=>{
try{
    let key = await bcrypt.genSalt(); //generating the salt
    let changedPassword= await bcrypt.hash(req.body.password, key); //encrypting the password
    let newuser = await usermodel({userid: req.body.userid, password:changedPassword});
    newuser.save();
    res.json(newuser);
}
catch(error){
    {message: error.message}
} })

app.get('/user', async(req, res)=> {
    let newuser =await usermodel.findOne({userid:req.body.userid});
    try{
        if(newuser!= null){
            if(await bcrypt.compare(req.body.password, newuser.password )) {
                res.send("User found");
            }
            else{
                res.send("try again");
            }
        } }
    catch(error){ {message: error.message} }
})
