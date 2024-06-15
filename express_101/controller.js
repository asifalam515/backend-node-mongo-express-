
const fs =require('fs')
export const homeController =(req,res)=>{
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

    export const aboutController=(req,res)=>{
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

 export const helpController = (req,res)=>{
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
