import express from "express"
import dotenv from "dotenv"
import { travelDataRoute } from "./src/Routes/travelData.js"
import { databaseConnecttion } from "./src/config/db.js"

const app = express()

dotenv.config()
//  middelware 
app.use(express.json())




// data base connection 
databaseConnecttion()



app.get(`/`,(req,res)=>{
    res.status(200).json({success:true,message:"server is running"})

})



// routes 
app.use(`/traveldata`,travelDataRoute)





// error handeling 
app.use((err,req,res,next)=>{
    console.log(err?.message || err);
    res.status(400).json({success:false,message:"This is a server site error.Please Contact with Developer "})
    next(err?.message || err)
})

//  app listing
const port = process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`server runing on port ${port}`);
})