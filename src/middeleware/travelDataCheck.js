import { body } from "express-validator";

export const travelDataValidation = [
  body("destinationName")
    .trim()
    .notEmpty()
    .withMessage("Destination name is required")
    .isLength({ min: 3 })
    .withMessage("Destination name must be at least 3 characters"),

  body("country")
    .trim()
    .notEmpty()
    .withMessage("Country is required"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isIn([
      "Beach",
      "Mountain",
      "City",
      "Adventure",
      "Cultural",
      "Luxury",
    ])
    .withMessage("Invalid category"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),

  body("duration")
    .trim()
    .notEmpty()
    .withMessage("Duration is required"),

  body("departureDate")
    .notEmpty()
    .withMessage("Departure date is required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("imageUrl")
    .notEmpty()
    .withMessage("Image URL is required")
    .isURL()
    .withMessage("Invalid image URL"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters"),
];