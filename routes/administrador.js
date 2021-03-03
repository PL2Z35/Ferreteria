const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
  res.render('administrador',{title:"administrador"})
});


module.exports = router;