'use strict' ;

const mongoose = require('mongoose');

// var db = mongoose.connect(connectionString).catch((error) => { console.log(error); });
module.exports = () => {
    mongoose.connect('mongodb+srv://User:1s2z4EdjUuSdIdY3@cluster0.ugrmr.mongodb.net/UserDB?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true,
    }).then(() => console.log('connected to mongodb!'));
}