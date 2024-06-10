const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(`
        <h1>Welcome to Express world</h1>
        `)
})

app.get('/about',(req,res)=>{
    res.json({
        "developer ":"asibul alam",
        "Teacher":"hm nayem"
    })
})

app.get('/error',(req,res)=>{
   res.status(400).send("Bad Request")
})

app.listen(4000,()=>{
    console.log("Server is listening on PORT : 4000");
})

