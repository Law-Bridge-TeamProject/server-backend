import { Schema, model, Model, models, Types } from "mongoose";

 enum AppointmentStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
} 

type AppointmentSchemaType = {
    clientClerkId: string; 
    lawyerId: Types.ObjectId; 
    schedule: Date; 
    status: AppointmentStatus
    chatRoomId?: Types.ObjectId; 
    createdAt?: Date; 
};

const AppointmentSchema = new Schema<AppointmentSchemaType>({
    clientClerkId: { type: String, required: true },
    lawyerId: { type: Schema.Types.ObjectId, ref: 'Lawyer', required: true },
    schedule: Date,
    status: { type: String, enum: Object.values(AppointmentStatus), default: AppointmentStatus.PENDING, required: true },
    chatRoomId: { type: Schema.Types.ObjectId, ref: 'ChatRoom' },
    createdAt: { type: Date, default: Date.now },
  },
{timestamps: true});
  
export const Appointment: Model<AppointmentSchemaType> =
    models["Appointment"] || model("Appointment", AppointmentSchema);