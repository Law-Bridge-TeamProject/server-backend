import { lawyerTypeDefs } from "./lawyer.schema";
import { commentTypeDefs } from "./comment.schema";
import { notificationTypeDefs } from "./notification.schema";
import { postTypeDefs } from "./post.schema";
import { reviewsTypeDefs } from "./review.schema";
import { specializationTypedefs } from "./specialization.schema";

export const typeDefs = [
  lawyerTypeDefs,
  specializationTypedefs,
  postTypeDefs,
  commentTypeDefs,
  reviewsTypeDefs,
  notificationTypeDefs,
];
