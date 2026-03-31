const mongoose = require("mongoose");


function connectToDB()
{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connect to the database");
    })
    .catch(()=>{
        console.log("Error to connect database");
    })
}

module.exports = connectToDB;