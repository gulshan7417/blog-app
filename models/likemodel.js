const mongoose=require("mongoose");


// route handler
  
const likeSchema= new mongoose.Schema({

  Post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  },
  user:{
    type: "String",
    required:true,
},

  
})
module.exports= mongoose.model("Like",likeSchema);



