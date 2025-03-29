const { error } = require('console');
const express=require('express');
const app=express();
const fs=require('fs');//inbuild of node js
const { json } = require('stream/consumers');
const path='abishek.txt';
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({
        mesaage:'Hello i am get'
    })
});
app.post('/',(req,res)=>{
    const{id,name,email,password,}=req.body;
   fs.writeFile(path,JSON.stringify(req.body),(err)=>{
    if(err){
        res.status(500).json({
            message:error.mesaage
        });
    };
    res.status(200).json({
        message:'Data succesfully written',
        //if you want to send the data back to the client you can do it like this
        data:{
      id,name,password,email
        }
    })
   });
});

app.put('/:query',(req,res)=>{
    const {query}=req.params;
    console.log(query);
    const{id,name,email,password,}=req.body;
    //TODO: handle....where i doesnt exist
//readfile using fs.readfile
//update data using


});
app.listen(3002,()=>{
    console.log('server start on port 3002')
});