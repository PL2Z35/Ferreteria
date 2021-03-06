var body_parser=require('body-parser');
const express = require('express');
const path = require('path');
const indexRouter= require('./routes/index.js');
const AdminRouter=require('./routes/admin.js');
const router = require('./routes/index.js');

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

app.use(body_parser.urlencoded({extended:true}));
app.use('/administrador',AdminRouter)
app.use(' ',AdminRouter);
app.use('/administrador/AnadirHerramientas',AdminRouter);

//Carpeta publica
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar Servidor
app.listen(4000, function(){
    console.log('Corriendo por el puerto 3000')
})

app.post('/log', (req,res)=>{
    var user = req.body.user
    var pass = req.body.pass
	console.log(user+"-"+pass)
	if(user=="admin"&&pass=='admin'){
		res.redirect('/administrador')
	}
});

app.post('/add', (req,res)=>{
    var user = req.body.user
    var pass = req.body.pass
	console.log(user+"-"+pass)
	if(user=="admin"&&pass=='admin'){
		res.redirect('/administrador')
	}
});



