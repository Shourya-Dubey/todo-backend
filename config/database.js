const mongoose = require("mongoose");


//through this we can access the property of env file through process object help to load process in env (enviorment), to install this use -> npm i dotenv
require('dotenv').config();


//those who call this function will use to stablished connetion between node and DB
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connection is Successfull"))
    .catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.massage);
        process.exit(1);
    });
}


//in Backend export through module.exports 
module.exports = dbConnect;