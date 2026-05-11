import express from "express"
import { addTravelDataControler } from "../controlers/addTravelData.js"
import { travelDataValidation } from "../middeleware/travelDataCheck.js"


export const travelDataRoute = express.Router()

travelDataRoute.post(`/`,travelDataValidation,addTravelDataControler)