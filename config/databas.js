const mongoose=require('mongoose')

require("dotenv").config()
const connectwithdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true

    }).then(console.log("db connected"))
    .catch((error)=>{
        console.log("error in connection")
        console.log(error)
        process.exit(1);
    })
}
module.exports=connectwithdb;