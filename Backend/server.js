const express = require("express")
const mongoose = require("mongoose")
// const route = require("./routes/route")


const app = express();

//DB connection
mongoose.connect("mongodb+srv://kunalsutrakar:NgMNQxtJCmkMM7VR@cluster0.ugstv8q.mongodb.net/E-Commerce")
.then(()=>console.log("Database connected"))
.catch(()=>console.log("Database is not connected"))


app.get("/",(req, res)=>{
    res.send("Hello from new server")
})


let port = 4000;
app.listen(port, (err)=>{
    if(err)console.log(err);
    else console.log(`Server is running at ${port}`);    
})