import { TravelData } from "../schema/travelDataSchema.js"

export const getTravelDataControler = async(req,res,next)=>{
    try {
        const data = await TravelData.find()
        res.status(200).json({success:false,message:"successfuly get travel data",data})
    } catch (error) {
        next(error)
    }
}