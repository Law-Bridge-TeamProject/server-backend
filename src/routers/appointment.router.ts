import { Router } from "express";
import { createAppointmentController } from "@/controllers/appointment";

export const appointmentRouter = Router();

appointmentRouter.post("/create-appointment", createAppointmentController);