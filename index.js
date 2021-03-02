const express= require('express');
const app= express();
const port=3000;
const path=require('path');
const indexRouter= require('./routes/index.js');
var body_parser=require('body-parser');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',indexRouter);
app.listen(port,()=>console.log("correcto"));