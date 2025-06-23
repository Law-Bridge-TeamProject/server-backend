import { achievementTypeDefs } from './achievement.schema'
import {appointmentTypeDefs} from './appointment.schema'
import { availabilityTypeDefs } from './availability.schema';
import { chatRoomSchema } from './chat-room.schema';


export const typeDefs = [
  appointmentTypeDefs,
  achievementTypeDefs,
  availabilityTypeDefs,
  chatRoomSchema,
];