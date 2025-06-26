import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Achievement = {
  __typename?: 'Achievement';
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  threshold: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export enum AllowedMediaEnum {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Appointment = {
  __typename?: 'Appointment';
  chatRoomId?: Maybe<Scalars['String']['output']>;
  clientId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  lawyerId: Scalars['String']['output'];
  schedule: Scalars['String']['output'];
  status: AppointmentStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export enum AppointmentStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

export type Availability = {
  __typename?: 'Availability';
  day: DayOfWeek;
  endTime: Scalars['String']['output'];
  lawyerId: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  _id: Scalars['String']['output'];
  allowedMedia?: Maybe<AllowedMediaEnum>;
  appointmentId: Scalars['String']['output'];
  participants: Array<Scalars['String']['output']>;
};

export type CreateAchievementInput = {
  description: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  threshold: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateAppointmentInput = {
  clientId: Scalars['String']['input'];
  lawyerId: Scalars['String']['input'];
  schedule: Scalars['String']['input'];
};

export type CreateChatRoomInput = {
  allowedMedia?: InputMaybe<AllowedMediaEnum>;
  appointmentId: Scalars['String']['input'];
  participants: Array<Scalars['String']['input']>;
};

export type CreateDocumentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<MediaType>;
};

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Document = {
  __typename?: 'Document';
  _id: Scalars['ID']['output'];
  clientId: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  images: Array<Scalars['String']['output']>;
  lawyerId?: Maybe<Scalars['ID']['output']>;
  reviewComment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ReviewStatus>;
  title: Scalars['String']['output'];
  type?: Maybe<DocumentMediaType>;
};

export enum DocumentMediaType {
  File = 'FILE',
  Image = 'IMAGE',
  Text = 'TEXT'
}

export enum MediaType {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Message = {
  __typename?: 'Message';
  chatRoomId: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  type: MediaType;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAchievement: Achievement;
  createAppointment?: Maybe<Appointment>;
  createChatRoom?: Maybe<Scalars['String']['output']>;
  createChatRoomAfterAppointment: ChatRoom;
  createDocument: Document;
  createMessage?: Maybe<Message>;
  deleteAchievement: Scalars['Boolean']['output'];
  reviewDocument: Document;
  setAvailability?: Maybe<Availability>;
  updateAchievement: Achievement;
  updateChatRoom: ChatRoom;
};


export type MutationCreateAchievementArgs = {
  input: CreateAchievementInput;
};


export type MutationCreateAppointmentArgs = {
  input: CreateAppointmentInput;
};


export type MutationCreateChatRoomArgs = {
  appointmentId: Scalars['String']['input'];
};


export type MutationCreateChatRoomAfterAppointmentArgs = {
  input: CreateChatRoomInput;
};


export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


export type MutationCreateMessageArgs = {
  chatRoomId: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  userId: Scalars['String']['input'];
};


export type MutationDeleteAchievementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationReviewDocumentArgs = {
  input: ReviewDocumentInput;
};


export type MutationSetAvailabilityArgs = {
  day: DayOfWeek;
  endTime: Scalars['String']['input'];
  lawyerId: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};


export type MutationUpdateAchievementArgs = {
  input: UpdateAchievementInput;
};


export type MutationUpdateChatRoomArgs = {
  input: UpdateChatRoomInput;
};

export type Query = {
  __typename?: 'Query';
  getAchievements?: Maybe<Array<Maybe<Achievement>>>;
  getAppointmentById?: Maybe<Appointment>;
  getAppointments?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByLawyer?: Maybe<Array<Maybe<Appointment>>>;
  getAppointmentsByUser?: Maybe<Array<Maybe<Appointment>>>;
  getAvailability?: Maybe<Array<Maybe<Availability>>>;
  getChatRoomById?: Maybe<ChatRoom>;
  getChatRoomsByAppointment: Array<ChatRoom>;
  getDocumentsByStatus: Array<Document>;
  getDocumentsByUser: Array<Document>;
  getMessages: Array<Message>;
};


export type QueryGetAchievementsArgs = {
  lawyerId: Scalars['ID']['input'];
};


export type QueryGetAppointmentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAppointmentsByLawyerArgs = {
  lawyerId: Scalars['String']['input'];
};


export type QueryGetAppointmentsByUserArgs = {
  clientId: Scalars['String']['input'];
};


export type QueryGetAvailabilityArgs = {
  day: DayOfWeek;
  lawyerId: Scalars['String']['input'];
};


export type QueryGetChatRoomByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryGetChatRoomsByAppointmentArgs = {
  appointmentId: Scalars['String']['input'];
};


export type QueryGetDocumentsByStatusArgs = {
  status: ReviewStatus;
};


export type QueryGetDocumentsByUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetMessagesArgs = {
  chatRoomId: Scalars['ID']['input'];
};

export type ReviewDocumentInput = {
  documentId: Scalars['ID']['input'];
  reviewComment?: InputMaybe<Scalars['String']['input']>;
  status: ReviewStatus;
};

export enum ReviewStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Reviewed = 'REVIEWED'
}

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  chatRoomId: Scalars['ID']['input'];
};

export type UpdateAchievementInput = {
  _id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChatRoomInput = {
  _id: Scalars['String']['input'];
  allowedMedia?: InputMaybe<AllowedMediaEnum>;
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Achievement: ResolverTypeWrapper<Achievement>;
  AllowedMediaEnum: AllowedMediaEnum;
  Appointment: ResolverTypeWrapper<Appointment>;
  AppointmentStatus: AppointmentStatus;
  Availability: ResolverTypeWrapper<Availability>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ChatRoom: ResolverTypeWrapper<ChatRoom>;
  CreateAchievementInput: CreateAchievementInput;
  CreateAppointmentInput: CreateAppointmentInput;
  CreateChatRoomInput: CreateChatRoomInput;
  CreateDocumentInput: CreateDocumentInput;
  DayOfWeek: DayOfWeek;
  Document: ResolverTypeWrapper<Document>;
  DocumentMediaType: DocumentMediaType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MediaType: MediaType;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ReviewDocumentInput: ReviewDocumentInput;
  ReviewStatus: ReviewStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdateAchievementInput: UpdateAchievementInput;
  UpdateChatRoomInput: UpdateChatRoomInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Achievement: Achievement;
  Appointment: Appointment;
  Availability: Availability;
  Boolean: Scalars['Boolean']['output'];
  ChatRoom: ChatRoom;
  CreateAchievementInput: CreateAchievementInput;
  CreateAppointmentInput: CreateAppointmentInput;
  CreateChatRoomInput: CreateChatRoomInput;
  CreateDocumentInput: CreateDocumentInput;
  Document: Document;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  Mutation: {};
  Query: {};
  ReviewDocumentInput: ReviewDocumentInput;
  String: Scalars['String']['output'];
  Subscription: {};
  UpdateAchievementInput: UpdateAchievementInput;
  UpdateChatRoomInput: UpdateChatRoomInput;
};

export type AchievementResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Achievement'] = ResolversParentTypes['Achievement']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppointmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Appointment'] = ResolversParentTypes['Appointment']> = {
  chatRoomId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AppointmentStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailabilityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Availability'] = ResolversParentTypes['Availability']> = {
  day?: Resolver<ResolversTypes['DayOfWeek'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatRoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ChatRoom'] = ResolversParentTypes['ChatRoom']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  allowedMedia?: Resolver<Maybe<ResolversTypes['AllowedMediaEnum']>, ParentType, ContextType>;
  appointmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lawyerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  reviewComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReviewStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['DocumentMediaType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  chatRoomId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaType'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAchievement?: Resolver<ResolversTypes['Achievement'], ParentType, ContextType, RequireFields<MutationCreateAchievementArgs, 'input'>>;
  createAppointment?: Resolver<Maybe<ResolversTypes['Appointment']>, ParentType, ContextType, RequireFields<MutationCreateAppointmentArgs, 'input'>>;
  createChatRoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateChatRoomArgs, 'appointmentId'>>;
  createChatRoomAfterAppointment?: Resolver<ResolversTypes['ChatRoom'], ParentType, ContextType, RequireFields<MutationCreateChatRoomAfterAppointmentArgs, 'input'>>;
  createDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationCreateDocumentArgs, 'input'>>;
  createMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'chatRoomId' | 'type' | 'userId'>>;
  deleteAchievement?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteAchievementArgs, 'id'>>;
  reviewDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationReviewDocumentArgs, 'input'>>;
  setAvailability?: Resolver<Maybe<ResolversTypes['Availability']>, ParentType, ContextType, RequireFields<MutationSetAvailabilityArgs, 'day' | 'endTime' | 'lawyerId' | 'startTime'>>;
  updateAchievement?: Resolver<ResolversTypes['Achievement'], ParentType, ContextType, RequireFields<MutationUpdateAchievementArgs, 'input'>>;
  updateChatRoom?: Resolver<ResolversTypes['ChatRoom'], ParentType, ContextType, RequireFields<MutationUpdateChatRoomArgs, 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAchievements?: Resolver<Maybe<Array<Maybe<ResolversTypes['Achievement']>>>, ParentType, ContextType, RequireFields<QueryGetAchievementsArgs, 'lawyerId'>>;
  getAppointmentById?: Resolver<Maybe<ResolversTypes['Appointment']>, ParentType, ContextType, RequireFields<QueryGetAppointmentByIdArgs, 'id'>>;
  getAppointments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Appointment']>>>, ParentType, ContextType>;
  getAppointmentsByLawyer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Appointment']>>>, ParentType, ContextType, RequireFields<QueryGetAppointmentsByLawyerArgs, 'lawyerId'>>;
  getAppointmentsByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Appointment']>>>, ParentType, ContextType, RequireFields<QueryGetAppointmentsByUserArgs, 'clientId'>>;
  getAvailability?: Resolver<Maybe<Array<Maybe<ResolversTypes['Availability']>>>, ParentType, ContextType, RequireFields<QueryGetAvailabilityArgs, 'day' | 'lawyerId'>>;
  getChatRoomById?: Resolver<Maybe<ResolversTypes['ChatRoom']>, ParentType, ContextType, RequireFields<QueryGetChatRoomByIdArgs, '_id'>>;
  getChatRoomsByAppointment?: Resolver<Array<ResolversTypes['ChatRoom']>, ParentType, ContextType, RequireFields<QueryGetChatRoomsByAppointmentArgs, 'appointmentId'>>;
  getDocumentsByStatus?: Resolver<Array<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryGetDocumentsByStatusArgs, 'status'>>;
  getDocumentsByUser?: Resolver<Array<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryGetDocumentsByUserArgs, 'userId'>>;
  getMessages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryGetMessagesArgs, 'chatRoomId'>>;
};

export type SubscriptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  messageAdded?: SubscriptionResolver<Maybe<ResolversTypes['Message']>, "messageAdded", ParentType, ContextType, RequireFields<SubscriptionMessageAddedArgs, 'chatRoomId'>>;
};

export type Resolvers<ContextType = Context> = {
  Achievement?: AchievementResolvers<ContextType>;
  Appointment?: AppointmentResolvers<ContextType>;
  Availability?: AvailabilityResolvers<ContextType>;
  ChatRoom?: ChatRoomResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

