let mongo = require('mongoose');

let userSchema = mongo.Schema({
    userid: {type:String},
    password: {type:String}
})

let userModel = 
mongo.model('user', userSchema);
module.exports= userModel;