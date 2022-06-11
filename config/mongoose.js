const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieproject');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting to database"));

db.once('open',function(){
    console.log("Connected to Database");
});

module.exports = db;