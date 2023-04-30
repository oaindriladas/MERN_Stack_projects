let mongo = require('mongoose');

let managerModel = new mongo.Schema({
    empid:{ type: Number, required:true, unique:true},
    empname:{ type:String, required:true},
    salary:{ type: Number, required:true}
})

let manager = mongo.model('manager', managerModel);
module.exports=manager;

