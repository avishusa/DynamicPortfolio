const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);

const connection=mongoose.connection;

connection.on('error',()=>{
    console.log("error in connecting to the database")
});

connection.on('connected',()=>{
    console.log("MongoDB Connection is Successful")
});

module.exports = connection;
