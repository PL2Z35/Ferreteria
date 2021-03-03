const express = require('express');
const path = require('path');

//App iniciada
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Crear servidor
app.get('/', function(req,res){
    res.render('index',{
        title: 'Ferreteria'
    })
});

//Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar Servidor
app.listen(4000, function(){
    console.log('Corriendo por el puerto 3000')
})