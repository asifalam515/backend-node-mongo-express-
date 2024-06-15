const express = require('express')
const app = express()
const fs = require('fs')
const cors =require('cors')
const morgan = require('morgan')
const { error } = require('console')


app.use(globalMiddleWare)
app.use(require('./routes'))

app.use((req,res,next)=>{ //jekono router er jnno eta use hobe
const error = new Error('404 not found !')
error.status =404;
next(error)
 
})


// global error middleware
app.use((err,req,res,next)=>{
    console.log("Error ", err);
if(err.status){

    return res.status(err.status).send(err.message)

}
res.status(500).send(` <h1>Something went wrong</h1>  `)
})

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

