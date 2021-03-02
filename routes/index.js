const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
  res.render('index',{title:"Pagina Inicial"})
});


module.exports = router;
