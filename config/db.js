
'use strict';
const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('MONGODB_URI');
require('dotenv').config();

const db = process.env.MONGODB_URI


const connectDB = async () =>{
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true 
        
        })
        .then (() =>console.log('mongo connected'))
    } catch{ (err =>{
        console.log(err.message);
        process.exit(1);
    })}
};

module.exports = connectDB;