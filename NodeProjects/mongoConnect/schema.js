const mongo = require('mongoose');

let managerSchema = new mongo.Schema({
    empid: { type: Number, required: true, unique:true},
    empname: { type: String, required: true},
    salary: { type: Number}
});

let manager = mongo.model("Manager", managerSchema);
module.exports = manager;