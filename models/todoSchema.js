const mongoose = require("mongoose");


//Schema means property / description of your data, here hold by todo
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLenght:50,
        },
        description:{
            type:String,
            required:true,
            maxLenght:50,
        },
        // createdAt:{
        //     type:Date,
        //     required:true,
        //     default:Date.now(),
        // },
        // updatedAt:{
        //     type:Date,
        //     required:true,
        //     default:Date.now(),
        // }
    }, {timestamps:true}
);


//any one can use this model By -> "Todo"
module.exports = mongoose.model("Todo", todoSchema);