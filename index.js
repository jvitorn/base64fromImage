const express = require('express');
const bodyParser = require('body-parser');
const path    = require('path');
const port     = 4200;
const cors    = require('cors');

const fs = require('fs');

//base64convert
const base64ToImage = require('base64-to-image');

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



app.post('/upload', function(req, res) {
   const { title } = req.body;
   const { img } = req.body;
   //verifica se no campo de imagem foi enviado algo 
   if(img){
      //verifica se o que esta sendo enviado é uma imagem
      const result  = img.indexOf('data:image/');
      //caso 1 = imagem , caso -1 nao é uma imagem , portando nao pode ser transformada em img
      if(result == 0){
      var base64Str = img;
      //caminho das imagens
      var path ='C:/Users/Admin/Desktop/Projetos/client-upload/imgs/';
      //filename é o nome do arquivo da img
      var optionalObj = {'fileName': title, 'type':'png'};
      //função de conversao 
      base64ToImage(base64Str,path,optionalObj); 

      
   // Note base64ToImage function returns imageInfo which is an object with imageType and fileName.
      var imageInfo = base64ToImage(base64Str,path,optionalObj); 
      //caminho inteiro da imagem
      const caminhodaimg = path + imageInfo.fileName;
     
      }else{
         console.log('nao é uma imagem');
      }
      
   }
   //passar a srt em base64
   
});
 app.listen(port,()=>{
    console.log('Servidor Iniciado e Rodando no link http://localhost:'+port);
})