const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
app.use(express.urlencoded({extended:true }))

app.get('/',(req,res)=>{
fs.readFile('./pages/index.html',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        res.write(data)
        res.end()
    }
})


})

app.get('/about',(req,res)=>{
    fs.readFile('./pages/about.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

app.get('/help',(req,res)=>{
    fs.readFile('./pages/help.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data)
            res.end()

        }
    })
})

app.listen(4000,()=>{
    console.log("Server is listening on PORT : 4000");
})

