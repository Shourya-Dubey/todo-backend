const Todo = require('../models/todoSchema');

exports.updateTodo = async(req, res) => {
    try{
        const id = req.params.id
        const {title, description} = req.body
        const updateTodo = await Todo.findByIdAndUpdate({_id:id} , {title, description})
        

        if(!updateTodo){
            res.status(404).json({
                success:false,
                massege:"Id not found"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:updateTodo,
                massege:`Todo updated by matching id ${id}`
            })
        }
    }
    catch(error){
        console.log("ERROR:", error)
        res.status(500).json({
            success:false,
            massege:"Something went wrong in Updating Todo"
        })
    }
}