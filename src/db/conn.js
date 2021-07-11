const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Roshandynamic",{
useCreateIndex :true,
useNewUrlParser:true,
useUnifiedTopology:true
}).then(() =>{
    console.log("connection succcessful");
}).catch((error)=>{
    console.log(`connection unsuccessful`);
}) 

