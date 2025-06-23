import { Schema, model, Model, models, Types } from "mongoose";

enum DayOfWeek {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday'
}
type AvailabilityScheduleSchemaType = {
    lawyerId: Types.ObjectId; 
    day: DayOfWeek;
    startTime: string; 
    endTime: string; 
    createdAt?: Date;
    updatedAt?: Date;
};

const AvailabilityScheduleSchema = new Schema<AvailabilityScheduleSchemaType>({
    lawyerId: { type: Schema.Types.ObjectId, ref: 'Lawyer', required: true },
    day: {
      enum: Object.values(DayOfWeek),
      type: String,
      required: true
    },
    startTime: { type: String, required: true }, 
    endTime: { type: String, required: true },   
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },{timestamps: true});
  
  export const AvailabilitySchedule: Model<AvailabilityScheduleSchemaType> =
    models["AvailabilitySchedule"] || model("AvailabilitySchedule", AvailabilityScheduleSchema);