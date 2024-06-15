const express = require('express')
const app = express()
const fs = require('fs')
const cors =require('cors')
const morgan = require('morgan')


app.use(globalMiddleWare)
app.use(require('./routes'))

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




app.listen(4000,()=>{
    console.log("Server is listening on PORT : 4000");
})

