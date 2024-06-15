
const { error } = require('console');
const fs =require('fs')
const homeController =(req,res)=>{
    const error = new Error("Bad Request")
    error.status =400
    throw error;
    fs.readFile('./pages/index.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data)
            res.end()
        }
    })
    
    
    }

 const aboutController=(req,res)=>{
    fs.readFile('./pages/about.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data)
            res.end()
        }
    })
}

const helpController = (req,res)=>{
    fs.readFile('./pages/help.html',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data)
            res.end()

        }
    })
}
module.exports ={
    helpController,
    aboutController,
    homeControllerd
}