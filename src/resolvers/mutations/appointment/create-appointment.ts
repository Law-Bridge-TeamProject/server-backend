import { MutationResolvers, AppointmentStatus } from "@/types/generated";

export const createAppointment: MutationResolvers["createAppointment"] = async (parent: unknown, { input }) => {
    console.log("Creating appointment with input:", input);

    // Mock implementation: Ensure all required fields for Appointment are returned
    const appointment = {
        _id: "generated-id", // Replace with actual ID generation logic
        status: "PENDING" as AppointmentStatus, // Replace with actual status logic
        ...input, // Spread input fields into the Appointment object
    };

    return appointment;
};