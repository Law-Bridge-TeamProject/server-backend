import { Request, Response } from "express";
import { Appointment } from "@/models";

// Request body validation type
type AppointmentDetailBody = {
  clientClerkId: string;
  lawyerId: string;
  schedule: string | Date;
  chatRoomId?: string;
};

export const createAppointmentController = async (
  req: Request<{}, {}, AppointmentDetailBody>,
  res: Response
) => {
  try {
    const { clientClerkId, lawyerId, schedule, chatRoomId } = req.body;

    // Basic validation
    if (!clientClerkId || !lawyerId || !schedule) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const newAppointment = await Appointment.create({
      clientClerkId,
      lawyerId,
      schedule: new Date(schedule),
      chatRoomId,
    });

    return res.status(201).json({
      message: "Appointment created successfully.",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);

    return res.status(500).json({
      message: "Internal server error.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
