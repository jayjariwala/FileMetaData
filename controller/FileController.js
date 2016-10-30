module.exports= function(app,multer)
{

app.post('/filesize', multer({dest:'./uploads/'}).single('upl'),function(req,res){
  var obj={
    filename:req.file.originalname,
    filesize:req.file.size+"kb"
  }

  res.end(JSON.stringify(obj));
});

}
