const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength:60,
        },
        description:{
            type:String,
            required:true,
            maxLength:60,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("Todo", todoSchema);

