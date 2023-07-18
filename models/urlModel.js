const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    url:{type:String},
    quantrl:{type:String, required:true},
    createdOn:{type:Date, default:Date.now()},
});

module.exports = mongoose.model('Quantrl', urlSchema);