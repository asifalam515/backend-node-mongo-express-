const express = require('express')
const app = express()
const fs = require('fs')
const cors =require('cors')
const morgan = require('morgan')


app.use(globalMiddleWare)


function globalMiddleWare(req,res,next){
    console.log(`${req.method} -- ${req.url}`);
    console.log(`I am a global middleWare`);
    if(req.query.bad){
        return req.status(400).send("Bad request")
    }

    next()
}


const localMiddleWare =(req,res,next)=>{
    console.log("I am a local middleWare");
    next()
}



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

app.get('/about',localMiddleWare,(req,res)=>{
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

