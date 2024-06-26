import express,{NextFunction, Request,Response} from 'express'
import { userInfo } from 'os';
import { execPath, hasUncaughtExceptionCaptureCallback } from 'process'
const app = express()
const port = 3000
// parsers
app.use(express.json());
app.use(express.text())

// router 
const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users",userRouter)
app.use("/api/v1/courses",courseRouter)


userRouter.get("/create-user",
    (req:Request,res:Response)=>{
    const user = req.body;
    console.log(user);
    res.json({
        success:true,
        message:"user is created successfully",
        data :user,
    })    
})


courseRouter.post("/create-course",(req:Request,res:Response)=>{
    const course =req.body
    console.log(course);
    res.json(
        {
          success:true,
          message:"posted",
          data :course  ,
        }
    )
})

// middleware
const logger = (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname);
    next()
}

app.get('/',logger, (req:Request, res:Response,next:NextFunction) => {
    try{
        res.send(something)
    }
    catch(error){
        console.log(error);
        next(error)
        // res.status(400).json(
        //     {
        //         success:false,
        // message:'failed to get data'
        //     }
        // )
        
    }
})
app.post('/',logger,(req:Request,res:Response)=>{
    console.log(req.body);
    res.json(
        {
            message:"successfully received the text"
        }
    )

})

app.all("*",(req:Request,res:Response)=>{
    res.status(400).json(
        {
              success:false,
    message:'Route is not found'
        }
    )
  
})

// global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    if(error){
       res.status(400).json({
        success:false,
        message:'something went wrong' 
       })
      
    }
})


export default app;