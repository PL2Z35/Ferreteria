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
    var Tools=[{"id":"22","name":"333"}];
    res.render('updateTool',{title:"Actualizar herramienta",Tools})
});
router.get('/VisualizarInventario',(req,res)=>{
    res.render('admin',{title:"PENDIENTE"})
});
router.get('/EliminarHerramienta',(req,res)=>{
    var Tools=[{"id":"22","name":"333"}];
    res.render('DeleteTool',{title:"Eliminar herramienta",Tools})
});
module.exports = router;
