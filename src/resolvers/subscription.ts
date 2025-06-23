// src/resolvers/subscription.ts
import { PubSub } from "graphql-subscriptions";
export const pubsub = new PubSub();

export const Subscription = {
  messageAdded: {
    subscribe: (_: unknown, { chatRoomId }: { chatRoomId: string }) => {
      return pubsub.asyncIterator([`MESSAGE_ADDED_${chatRoomId}`]);
    },
  },
};
