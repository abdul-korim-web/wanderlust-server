import express from "express"

const app = express()
//  middelware 
app.use(express.json())
app.get(`/`,(req,res)=>{
    res.status(200).json({success:true,message:"server is running"})

})



//  app listing
const port = process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`server runing on port ${port}`);
})