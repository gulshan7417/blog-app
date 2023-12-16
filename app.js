const express=require('express')
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(express.json());

const blog =require("./routes/blog");   
  
app.use("/api/v1",blog);


const connectwithdb=require('./config/databas');
 connectwithdb();
app.listen(PORT,
()=>{
    console.log(`app running at port ${PORT}`)
}
)

