import express from "express"
import { addTravelDataControler } from "../controlers/addTravelData.js"
import { travelDataValidation } from "../middeleware/travelDataCheck.js"
import { getTravelDataControler } from "../controlers/getTravelData.js"
import { getSingleTravelDataControler } from "../controlers/getSingleTravelData.js"
import { updateTravelDataControler } from "../controlers/updateTravelData.js"


export const travelDataRoute = express.Router()
// get travel data 
travelDataRoute.get(`/`,getTravelDataControler)
// get single travel data 
travelDataRoute.get(`/:id`,getSingleTravelDataControler)
// create travel data 
travelDataRoute.post(`/`,travelDataValidation,addTravelDataControler)
// update travel data 
travelDataRoute.patch(`/:id`,updateTravelDataControler)