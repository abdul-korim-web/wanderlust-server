import mongoose from "mongoose";

const travelDataSchema = new mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Beach",
        "Mountain",
        "City",
        "Adventure",
        "Cultural",
        "Luxury",
      ],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    duration: {
      type: String,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      minlength: 20,
    },
    totalUpdateData:{
      type:Number
    }
  },
  {
    timestamps: true,
  }
);

export const TravelData =
  mongoose.models.TravelData ||
  mongoose.model("TravelData", travelDataSchema);