const express = require('express');
const path = require('path');
const indexRouter= require('./routes/index.js');
const AdminRouter=require('./routes/admin.js');

//App iniciada
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use('/',indexRouter);
//Crear servidor
app.get('/', function(req,res){
    res.render('index',{
        title: 'Ferreteria'
    })
});
app.use(' ',AdminRouter);
app.use('/administrador/AnadirHerramientas',AdminRouter);

//Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar Servidor
app.listen(4000, function(){
    console.log('Corriendo por el puerto 3000')
})