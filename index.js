
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//     console.log("app is runing successfully");
// });

const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Todo API
const todoRoutes = require("./routes/Todos");

//mount the todo api
app.use("/api/v2", todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect()

//default route
app.get("/", (req,res) => {
    res.send(`<h1> This is Homepage, and next page is backend</h1>`);
})

