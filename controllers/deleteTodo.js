const Todo = require("../models/todoSchema");

exports.deleteTodo = async(req,res) => {
    try{
        const id = req.params.id
        const deleteData = await Todo.findByIdAndDelete({_id:id})

        res.status(200).json({
          success: true,
          data: deleteData,
          massege: "Deleting data is successfull",
        });
    }
    catch(error){
        console.log("ERROR:", error)
        res.status(500).json({
            success:false,
            massege:"Deleting data is Failed"
        })
    }
}