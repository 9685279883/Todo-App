//import

const Todo = require("../models/Todo");

//route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from reauest body
        const {title,description} = req.body;
        //create a mew todo object
        const response = await Todo.create({title,description});
        // send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Succesfully'
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


