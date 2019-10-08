var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    level: Number
});

const item = mongoose.model('items', itemSchema);

module.exports =  item;