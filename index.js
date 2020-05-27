const express = require('express');
const bodyParser = require('body-parser');
const path    = require('path');
const port     = 4200;
const cors    = require('cors');
const formidable = require('formidable');
const fs = require('fs');
const fileUpload = require('express-fileupload');

 //criando app
 const app = express();
 //midwares
 //arquivos
 //erro do cors
 app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});
 app.use(express.static('./public'));
 app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 app.use(bodyParser.json({limit: '50mb'}));
    //cors
    app.use(cors())

 // default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
   const { title } = req.body;
   const { img } = req.body;
   if(img){
      console.log('imagem existe');
   }
  console.log(title);
});
 app.listen(port,()=>{
    console.log('Servidor Iniciado e Rodando no link http://localhost:'+port);
})