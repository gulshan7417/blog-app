const express=require('express');
const router=express.Router();
  // import controller

  const {dummy}=require('../controllers/like');



  router.get('/dummy',dummy);



  module.exports=router;