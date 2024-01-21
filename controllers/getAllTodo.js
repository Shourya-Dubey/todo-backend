// const { todo } = require("node:test");
const Todo = require("../models/todoSchema");

exports.getAllTodo = async(req,res)=> {
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

exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id
        const todo = await Todo.findById({_id:id})

        res.status(200).json({
            success:true,
            data:todo,
            massege:"fetching TodoById successfull"
        })
    }
    catch(error){
        console.log("ERROR:" , error)
        res.status(500).json({
            success:false,
            massege:"Fetching TodoById"
        })
    }
}