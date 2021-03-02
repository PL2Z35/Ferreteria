const express= require('express');
const { render } = require('pug');
const router= express.Router();

router.get('/',(req,res)=>{
  res.render('index',{title:"Pagina Inicial"})
});
router.post('/logAdmin',(req,res)=>{
    var user=req.body.usuario;
    var pass=req.body.pass;
    if(user=="admin" && pass=="admin"){
        res.redirect('/administrador')
    }else{
        res.redirect('/');
    }

});

module.exports = router;
