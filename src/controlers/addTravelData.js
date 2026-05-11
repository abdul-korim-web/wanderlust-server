import { validationResult } from "express-validator";
import { TravelData } from "../schema/travelDataSchema.js";

export const addTravelDataControler = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg || "Validation error",
      });
    }

    const {
      destinationName,
      country,
      category,
      price,
      duration,
      departureDate,
      imageUrl,
      description,
    } = req.body;

    const travel = await TravelData.create({
      destinationName,
      country,
      category,
      price,
      duration,
      departureDate,
      imageUrl,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Travel package created successfully",
      data: travel,
    });

  } catch (error) {
    next(error);
  }
};