var express=require('express');
var app=express();
var controller=require(__dirname +'/controller/FileController');
var bodyParser=require('body-parser');
var multer= require('multer');
app.use(express.static('./public'));
app.use(bodyParser.json());


app.get('/',function(req, res){

res.sendFile(__dirname +'/index.html');

})



controller(app,multer);




var port=Number(process.env.PORT|| 8082);
app.listen(port);
