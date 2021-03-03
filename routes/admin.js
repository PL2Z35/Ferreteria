const express= require('express');
const router= express.Router();
const app = express();

router.get('/',(req,res)=>{
  res.render('admin',{title:"Administrador"})
});
router.get('/AnadirHerramienta',(req,res)=>{
    res.render('newTools',{title:"Añadir Herramienta"})
});
router.get('/ActualizarHerramienta',(req,res)=>{
    res.render('admin',{title:"Addekjhkjdr"})
});
router.get('/VisualizarInventario',(req,res)=>{
    res.render('admin',{title:"Addekjhkjdr"})
});
router.get('/EliminarHerramienta',(req,res)=>{
    res.render('admin',{title:"Addekjhkjdr"})
});
module.exports = router;
