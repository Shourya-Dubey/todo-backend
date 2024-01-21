// const { todo } = require("node:test");
const Todo = require("../models/todoSchema");

exports.getAllTodo = async()=> {
    try{
        const todo = await Todo.find({})
        
        res.status(200).json({
            success:true,
            data:todo,
            massege:"Data fetch Successfull"
        })
    }
    catch(error){
        console.log("Error:", error)
        res.status(500).json({
          success: true,
          massege: "Data fetch unsuccessfull",
        });
    }
}