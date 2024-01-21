//import the model
const Todo = require("../models/todoSchema");

//define route handler
exports.createTodo = async(req,res) => {
    try{
       //extract title and description from request dody
       const {title, description} = req.body;  
       //create a new Todo obj and insert in DB
       const response = await Todo.create({title, description});
       //send a json response with a success flag
       res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry created Succesfully'
        }
       );
    }
    catch(error){
        // console.error(error);
        console.log("Error:", error);
        res.status(500)
        .json({
            success:false,
            data:'internal server error',
            message:error.message,
        })
    }
}