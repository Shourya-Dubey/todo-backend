const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middlewate to paarse json request body
app.use(express.json());


//import routes for Todo API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () =>{
    console.log(`server started successfully at ${PORT}`);
})

//connection to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res)=>{
    res.send("This is HOMEPAGE of TodoApp");
})