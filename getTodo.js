const Todo = require("../models/Todo");


exports.getTodo = async(req, res) => {
    try {
        //fetch all todo items 
        const todos = await Todo.find({});

        //response update
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Todo data is fetched"
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
}

exports.getTodoById = async(req,res) =>{

    try {
        //extract todo items basic on id
        const id = req.params.id
        const todo = await Todo.findById( {_id: id})
        
        //data for gvien id not found
        if (!todo){
            return res.status(404).json({
                success:false,
                message:"NO data found both given id",
            })
        }
        //Data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }

}





