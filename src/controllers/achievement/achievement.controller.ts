import { Request, Response } from "express";
import { Appointment } from "@/models";


export const appointmentController = async (req: Request, res: Response) => {
  try {
       const { limit = 20, page = 0 } = req.query;
    
        const allAppointment = await Appointment.find()
          .populate("categoryName")
          .limit(Number(limit))
          .skip(Number(+limit * +page));
    
        const total = await Appointment.countDocuments();

        res.status(201).send({ message: "Success", allAppointment, total });
    return;
  } catch (error) {
    console.error("Error during getting category", error);

    res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown Error.",
    });
  }
};
