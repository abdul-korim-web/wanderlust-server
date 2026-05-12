import { TravelData } from "../schema/travelDataSchema.js";

export const getSingleTravelDataControler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await TravelData.findById(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Travel data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "travel data found ",
      data,
    });
  } catch (error) {
    next(error);
  }
};
