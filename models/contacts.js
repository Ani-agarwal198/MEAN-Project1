const mongoose = require('mongoose');

const ConstactSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Constact = module.exports = mongoose.model('Contact', ConstactSchema);
