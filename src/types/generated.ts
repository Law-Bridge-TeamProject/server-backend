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

export type CreateLawyerInput = {
  bio: Scalars['String']['input'];
  email: Scalars['String']['input'];
  experience: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  licenseNumber: Scalars['String']['input'];
  profilePicture: Scalars['String']['input'];
  specializations: Array<Specialization>;
};

export type CreatePostInput = {
  content: MediaInput;
  specializationId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
};

export type CreateSpecializationInput = {
  Subscription: Scalars['Boolean']['input'];
  categoryName: SpecializationCategory;
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
};

export type Lawyer = {
  __typename?: 'Lawyer';
  bio: Scalars['String']['output'];
  email: Scalars['String']['output'];
  experience: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  lawyerId: Scalars['String']['output'];
  licenseNumber: Scalars['String']['output'];
  profilePicture: Scalars['String']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  specializations: Array<Specialization>;
  verified: Scalars['Boolean']['output'];
};

export type Media = {
  __typename?: 'Media';
  audio?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type MediaInput = {
  audio?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLawyer?: Maybe<Lawyer>;
  createNotification: Notification;
  createPost: Post;
  createReview: Review;
  createSpecialization: Specialization;
  deleteLawyer?: Maybe<Scalars['Boolean']['output']>;
  deletePost: Scalars['Boolean']['output'];
  deleteReview?: Maybe<Scalars['Boolean']['output']>;
  deleteSpecialization?: Maybe<Scalars['Boolean']['output']>;
  markNotificationAsRead: Notification;
  updateLawyer?: Maybe<Lawyer>;
  updatePost: Post;
  updateReview: Review;
  updateSpecialization?: Maybe<Specialization>;
};


export type MutationCreateLawyerArgs = {
  input: CreateLawyerInput;
};


export type MutationCreateNotificationArgs = {
  lawyerId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
  lawyerId: Scalars['ID']['input'];
};


export type MutationCreateSpecializationArgs = {
  input: CreateSpecializationInput;
};


export type MutationDeleteLawyerArgs = {
  lawyerId: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  lawyerId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteSpecializationArgs = {
  categoryName: SpecializationCategory;
};


export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars['ID']['input'];
};


export type MutationUpdateLawyerArgs = {
  input: CreateLawyerInput;
  lawyerId: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
  postId: Scalars['ID']['input'];
};


export type MutationUpdateReviewArgs = {
  input: CreateReviewInput;
  lawyerId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateSpecializationArgs = {
  categoryName: SpecializationCategory;
  input: CreateSpecializationInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['String']['output'];
  message: Scalars['String']['output'];
  notificationId: Scalars['ID']['output'];
  read: Scalars['Boolean']['output'];
  recipientId: Scalars['ID']['output'];
  type: NotificationType;
};

export enum NotificationType {
  AppointmentCancellation = 'APPOINTMENT_CANCELLATION',
  AppointmentConfirmation = 'APPOINTMENT_CONFIRMATION',
  AppointmentReminder = 'APPOINTMENT_REMINDER',
  AppointmentRequest = 'APPOINTMENT_REQUEST',
  AppointmentStarted = 'APPOINTMENT_STARTED',
  ReviewReceived = 'REVIEW_RECEIVED',
  SpecializationUpdate = 'SPECIALIZATION_UPDATE'
}

export type Post = {
  __typename?: 'Post';
  content: Media;
  lawyerId: Scalars['String']['output'];
  postId: Scalars['ID']['output'];
  specializationId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getLawyerById?: Maybe<Lawyer>;
  getLawyers?: Maybe<Array<Maybe<Lawyer>>>;
  getLawyersBySpecialization?: Maybe<Array<Maybe<Lawyer>>>;
  getNotifications: Array<Notification>;
  getPostById?: Maybe<Post>;
  getPostsByLawyer: Array<Post>;
  getReviewsByLawyer: Array<Review>;
  getReviewsByUser: Array<Review>;
  getSpecializationByCategory?: Maybe<Specialization>;
  getSpecializations: Array<Specialization>;
};


export type QueryGetLawyerByIdArgs = {
  lawyerId: Scalars['String']['input'];
};


export type QueryGetLawyersBySpecializationArgs = {
  specialization: Scalars['String']['input'];
};


export type QueryGetNotificationsArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetPostsByLawyerArgs = {
  lawyerId: Scalars['String']['input'];
};


export type QueryGetReviewsByLawyerArgs = {
  lawyerId: Scalars['ID']['input'];
};


export type QueryGetReviewsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetSpecializationByCategoryArgs = {
  categoryName: SpecializationCategory;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  lawyerId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  userId: Scalars['ID']['output'];
};

export type Specialization = {
  __typename?: 'Specialization';
  Subscription: Scalars['Boolean']['output'];
  categoryName: SpecializationCategory;
  pricePerHour?: Maybe<Scalars['Int']['output']>;
  specializationId: Scalars['ID']['output'];
};

export enum SpecializationCategory {
  Administrative = 'Administrative',
  Civil = 'Civil',
  Constitutional = 'Constitutional',
  Criminal = 'Criminal',
  Environmental = 'Environmental',
  Family = 'Family',
  Immigration = 'Immigration',
  IntellectualProperty = 'IntellectualProperty',
  Labor = 'Labor',
  Property = 'Property',
  Tax = 'Tax'
}

export type UpdatePostInput = {
  content?: InputMaybe<MediaInput>;
  specializationId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateLawyerInput: CreateLawyerInput;
  CreatePostInput: CreatePostInput;
  CreateReviewInput: CreateReviewInput;
  CreateSpecializationInput: CreateSpecializationInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lawyer: ResolverTypeWrapper<Lawyer>;
  Media: ResolverTypeWrapper<Media>;
  MediaInput: MediaInput;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationType: NotificationType;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  Specialization: ResolverTypeWrapper<Specialization>;
  SpecializationCategory: SpecializationCategory;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdatePostInput: UpdatePostInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateLawyerInput: CreateLawyerInput;
  CreatePostInput: CreatePostInput;
  CreateReviewInput: CreateReviewInput;
  CreateSpecializationInput: CreateSpecializationInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Lawyer: Lawyer;
  Media: Media;
  MediaInput: MediaInput;
  Mutation: {};
  Notification: Notification;
  Post: Post;
  Query: {};
  Review: Review;
  Specialization: Specialization;
  String: Scalars['String']['output'];
  UpdatePostInput: UpdatePostInput;
};

export type LawyerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Lawyer'] = ResolversParentTypes['Lawyer']> = {
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  experience?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  licenseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profilePicture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  specializations?: Resolver<Array<ResolversTypes['Specialization']>, ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  audio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createLawyer?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<MutationCreateLawyerArgs, 'input'>>;
  createNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'lawyerId' | 'message' | 'userId'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  createReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'input' | 'lawyerId'>>;
  createSpecialization?: Resolver<ResolversTypes['Specialization'], ParentType, ContextType, RequireFields<MutationCreateSpecializationArgs, 'input'>>;
  deleteLawyer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteLawyerArgs, 'lawyerId'>>;
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'postId'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'lawyerId' | 'userId'>>;
  deleteSpecialization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteSpecializationArgs, 'categoryName'>>;
  markNotificationAsRead?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationMarkNotificationAsReadArgs, 'notificationId'>>;
  updateLawyer?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<MutationUpdateLawyerArgs, 'input' | 'lawyerId'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'input' | 'postId'>>;
  updateReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'input' | 'lawyerId' | 'userId'>>;
  updateSpecialization?: Resolver<Maybe<ResolversTypes['Specialization']>, ParentType, ContextType, RequireFields<MutationUpdateSpecializationArgs, 'categoryName' | 'input'>>;
};

export type NotificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notificationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  recipientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NotificationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  content?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  specializationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getLawyerById?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<QueryGetLawyerByIdArgs, 'lawyerId'>>;
  getLawyers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lawyer']>>>, ParentType, ContextType>;
  getLawyersBySpecialization?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lawyer']>>>, ParentType, ContextType, RequireFields<QueryGetLawyersBySpecializationArgs, 'specialization'>>;
  getNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryGetNotificationsArgs, 'userId'>>;
  getPostById?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, 'postId'>>;
  getPostsByLawyer?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostsByLawyerArgs, 'lawyerId'>>;
  getReviewsByLawyer?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryGetReviewsByLawyerArgs, 'lawyerId'>>;
  getReviewsByUser?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryGetReviewsByUserArgs, 'userId'>>;
  getSpecializationByCategory?: Resolver<Maybe<ResolversTypes['Specialization']>, ParentType, ContextType, RequireFields<QueryGetSpecializationByCategoryArgs, 'categoryName'>>;
  getSpecializations?: Resolver<Array<ResolversTypes['Specialization']>, ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecializationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Specialization'] = ResolversParentTypes['Specialization']> = {
  Subscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['SpecializationCategory'], ParentType, ContextType>;
  pricePerHour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  specializationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Lawyer?: LawyerResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Specialization?: SpecializationResolvers<ContextType>;
};

