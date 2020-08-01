'use strict';
const express = require('express');
const connectDB = require('./config/db.js')
const app = express();
require('dotenv').config();
const path = require('path')
connectDB();


app.use(express.json({extended:false}));



app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`server started on port ${PORT}`));