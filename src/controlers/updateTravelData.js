import { TravelData } from "../schema/travelDataSchema.js";

export const updateTravelDataControler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = await TravelData.findByIdAndUpdate(
      id,
      { $set: data, $inc: { totalUpdateData: 1 } },
      { new: true },
    );
    if (!updateData) {
      return res.status(404).json({
        success: false,
        message: "Travel data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Travel data updated successfully",
      data: updateData,
    });
  } catch (error) {
    next(error);
  }
};
