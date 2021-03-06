'use strict';
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectID,
        ref: 'users'

    },
    name:{type: String , require:true},
    email:{type: String , require:true },
    phone:{type: String },
    type:{type:String, default:'personal'},
    data:{type: Date , default:Date.now}

});

module.exports = mongoose.model('contact' , contactSchema);