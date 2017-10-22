let express=require("express");
let app=express();
let slider=require('./Slider');
let fs=require('fs');
let path=require('path');
app.listen(3000);
app.get('/api/slider',function(req,res){
    res.send(slider)
});
app.get('/api/history',function(req,res){
    let data=fs.readFileSync(path.resolve('./history'),'utf-8');
    console.log(JSON.stringify(data));
    res.send(data)
});