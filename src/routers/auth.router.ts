import { Router } from "express";
import { appointmentController, createAppointmentController } from "@/controllers/appointment";
import { authenticateUser } from "../middlewares";

export const authRouter = Router();

authRouter.get("/create-appointment", createAppointmentController);