const express= require('express');
const router= express.Router();
const app = express();
const tools = [];

router.get('/',(req,res)=>{
  res.render('admin',{title:"Administrador"})
});

router.get('/AnadirHerramienta',(req,res)=>{
    res.render('newTools',{title:"Añadir Herramienta"})

});
//?
router.get('/', (req, res)=>{
  res.render('newTools');
})


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

//control de datos
router.post('/newTools', (req, res) => {
  //const {barCode, quantity, brand, price, description} = req.body;
  const barcode= req.body.BarCode;
  const quantity=req.body.Quantity;
  const brand=req.body.Brand;
  const price=req.body.Price;
  const description=req.body.Description;
  if(barcode!=null && quantity!=null && brand!=null && price!=null && description!=null ){
    if(quantity>0 && price>0){
      res.render('admin',{title:"Administrador"})
    }else {
      res.render('newTools',{title:"Añadir Herramienta"})
    }
  }


  /*if(!barsCode || !quantity || !brand || !price || !description){
  res.status(400).send('Entradas incompletas');
  return;
  }
  */
  /*let newTool = {
    barsCode,
    quantity,
    brand,
    price,
    description
  }

  tools.push(newTool);*/
});

router.post('/updatetool',(req,res)=>{
  const barcode=req.body.Barcodes;
  const quantity=req.body.Quantity;
  const price=req.body.Price;
  const description=req.body.Description;

  console.log("codigo"+ barcode +"canridad"+ quantity + "Precio" +price +"Descripcion"+description )
});
router.post('/deletetool',(req,res)=>{
  const barcode=req.body.Barcodes;
  console.log("LLegando ="+barcode)
});





module.exports = router;
