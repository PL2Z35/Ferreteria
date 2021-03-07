const express= require('express');
const router= express.Router();
const app = express();
const tools = [];
var existe;
var i;
var estado;

router.get('/',(req,res)=>{
  res.render('admin',{title:"Administrador"})
});

router.get('/AnadirHerramienta',(req,res)=>{
    res.render('newTools',{title:"Añadir Herramienta"})

});

router.get('/ActualizarHerramienta',(req,res)=>{
    res.render('updateTool',{title:"Actualizar herramienta",tools})
});

router.get('/VisualizarInventario',(req,res)=>{
    res.render('admin',{title:"PENDIENTE"})
});
router.get('/EliminarHerramienta',(req,res)=>{
    res.render('DeleteTool',{title:"Eliminar herramienta",tools})
});

//control de datos
router.post('/newTools', (req, res) => {
  const {BarCode, Quantity, Brand, Price, Description} = req.body;
  let newTool = {
    BarCode,
    Quantity,
    Brand,
    Price,
    Description
  }

  for (i = 0; i < tools.length; i++){
    barsCode = tools[i].BarCode;
    console.log("varr"+barsCode);
    if(barsCode == BarCode){
      existe = i;
      estado = true;
    }
  }

  if(BarCode!=null && Quantity!=null && Brand!=null && Price!=null && Description!=null ){
    if(Quantity>0 && Price>0 && estado!=true){
      res.render('admin',{title:"Administrador"})
      tools.push(newTool);
    }else {
      res.render('newTools',{title:"Añadir Herramienta"})
    }
  }

  console.log(tools);

});

router.post('/updatetool',(req,res)=>{
    const {Barcodes, Quantity, Brand, Price, Description} = req.body;
    let updateTool = {
      Barcodes,
      Quantity,
      Brand,
      Price,
      Description
    }
  /*const barsCode;
  const quantity;
  const brand;
  const price;
  const description;
  /*const barcode=req.body.Barcodes;
  const quantity=req.body.Quantity;
  const price=req.body.Price;
  const description=req.body.Description;*/


  for (i = 0; i < tools.length; i++){
    barsCode = tools[i].BarCodes;
    quantity = tools[i].Quantity;
    price = tools[i].Price;
    description = tools[i].Description;
    if(Quantity!=null && Price!=null && Description!=null ){
      if(Quantity>0 && Price>0){
        res.render('admin',{title:"Administrador"})
        tools.update(updateTool);
      }else {
        res.render('newTools',{title:"Añadir Herramienta"})
      }
    }
  }

});


router.post('/deletetool',(req,res)=>{
  //const {Barcodes, Quantity, Brand, Price, Description} = req.body;
  var dato;
  //const barcode=req.body.Barcodes;
  const barcode=req.body.BarCode;
  for (i = 0; i < tools.length; i++){
    barsCode = tools[i].BarCodes;
    if(barsCode == barcode){
      dato = tools[i].BarCodes;
      existe = i;
      estado = true;
    }
  }
  tools.pop(dato);
  console.log(tools);
  res.render('admin',{title:"Administrador"});
});





module.exports = router;
