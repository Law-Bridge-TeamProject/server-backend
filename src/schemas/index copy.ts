import { lawyerTypeDefs } from "./lawyer.schema";
import { commentTypeDefs } from "./comment.schema";
import { notificationTypeDefs } from "./notification.schema";
import { reviewsTypeDefs } from "./review.schema";
import { specializationTypedefs } from "./specialization.schema";
import { postTypeDefs } from "./post.schema";
import { achievementTypeDefs } from "./achievements.schema";

export const typeDefs = [
  achievementTypeDefs,
  lawyerTypeDefs,
  specializationTypedefs,
  commentTypeDefs,
  reviewsTypeDefs,
  notificationTypeDefs,
  postTypeDefs,
];
