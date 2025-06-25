import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  post: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};

export type CreateLawyerInput = {
  bio: Scalars['String']['input'];
  email: Scalars['String']['input'];
  experience: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  licenseNumber: Scalars['String']['input'];
  profilePicture: Scalars['String']['input'];
  specializations: Array<SpecializationInput>;
};

export type CreatePostInput = {
  content: MediaInput;
  specialization: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Media;
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
};

export type CreateSpecializationInput = {
  categoryName: SpecializationCategory;
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
  subscription: Scalars['Boolean']['input'];
};

export type DeleteCommentInput = {
  commentId: Scalars['ID']['input'];
};

export type Lawyer = {
  __typename?: 'Lawyer';
  achievements: Scalars['String']['output'];
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

export enum Media {
  Audio = 'audio',
  Image = 'image',
  Text = 'text',
  Video = 'video'
}

export type MediaInput = {
  audio?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createLawyer?: Maybe<Lawyer>;
  createNotification: Notification;
  createPost: Post;
  createReview: Review;
  createSpecialization: Specialization;
  deleteComment: Scalars['Boolean']['output'];
  deleteLawyer?: Maybe<Scalars['Boolean']['output']>;
  deletePost: Scalars['Boolean']['output'];
  deleteReview: Scalars['Boolean']['output'];
  deleteSpecialization: Scalars['Boolean']['output'];
  markNotificationAsRead: Notification;
  updateComment: Comment;
  updateLawyer?: Maybe<Lawyer>;
  updatePost: Post;
  updateReview: Review;
  updateSpecialization: Specialization;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateLawyerArgs = {
  input: CreateLawyerInput;
};


export type MutationCreateNotificationArgs = {
  clientId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  lawyerId: Scalars['ID']['input'];
  type?: InputMaybe<NotificationType>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateSpecializationArgs = {
  input: CreateSpecializationInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteLawyerArgs = {
  lawyerId: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID']['input'];
};


export type MutationDeleteSpecializationArgs = {
  categoryName: SpecializationCategory;
};


export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
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
  input: UpdateReviewInput;
  reviewId: Scalars['ID']['input'];
};


export type MutationUpdateSpecializationArgs = {
  categoryName: SpecializationCategory;
  input: UpdateSpecializationInput;
};

export type Notification = {
  __typename?: 'Notification';
  clientId?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  lawyerId: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
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
  _id: Scalars['ID']['output'];
  content: MediaInput;
  createdAt: Scalars['Date']['output'];
  lawyerId: Scalars['String']['output'];
  specialization: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Media;
  updatedAt: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCommentsByPost: Array<Comment>;
  getLawyerById?: Maybe<Lawyer>;
  getLawyers?: Maybe<Array<Maybe<Lawyer>>>;
  getLawyersBySpecialization?: Maybe<Array<Maybe<Lawyer>>>;
  getNotifications: Array<Notification>;
  getNotificationsClient: Array<Notification>;
  getNotificationsLawyer: Array<Notification>;
  getPostById?: Maybe<Post>;
  getPostsByLawyer: Array<Post>;
  getPostsBySpecializationId: Array<Post>;
  getReviewsByLawyer: Array<Review>;
  getReviewsByUser: Array<Review>;
  getSpecializationByCategory?: Maybe<Specialization>;
  getSpecializations: Array<Specialization>;
  getSpecializationsByLawyer: Array<Specialization>;
  searchPosts: Array<Post>;
};


export type QueryGetCommentsByPostArgs = {
  postId: Scalars['ID']['input'];
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


export type QueryGetNotificationsClientArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetNotificationsLawyerArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetPostsByLawyerArgs = {
  lawyerId: Scalars['String']['input'];
};


export type QueryGetPostsBySpecializationIdArgs = {
  specializationId: Scalars['ID']['input'];
};


export type QueryGetReviewsByLawyerArgs = {
  lawyerId: Scalars['ID']['input'];
};


export type QueryGetReviewsByUserArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetSpecializationByCategoryArgs = {
  categoryName: SpecializationCategory;
};


export type QueryGetSpecializationsByLawyerArgs = {
  lawyerId: Scalars['ID']['input'];
  subscription?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchPostsArgs = {
  query: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  clientId: Scalars['ID']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  lawyerId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Specialization = {
  __typename?: 'Specialization';
  categoryName: SpecializationCategory;
  id: Scalars['ID']['output'];
  pricePerHour?: Maybe<Scalars['Int']['output']>;
  subscription: Scalars['Boolean']['output'];
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

export type SpecializationInput = {
  categoryName: SpecializationCategory;
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
  subscription: Scalars['Boolean']['input'];
};

export type UpdateCommentInput = {
  commentId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
};

export type UpdatePostInput = {
  content?: InputMaybe<MediaInput>;
  specialization?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Media>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSpecializationInput = {
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
  subscription?: InputMaybe<Scalars['Boolean']['input']>;
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
  Comment: ResolverTypeWrapper<Comment>;
  CreateCommentInput: CreateCommentInput;
  CreateLawyerInput: CreateLawyerInput;
  CreatePostInput: CreatePostInput;
  CreateReviewInput: CreateReviewInput;
  CreateSpecializationInput: CreateSpecializationInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DeleteCommentInput: DeleteCommentInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lawyer: ResolverTypeWrapper<Lawyer>;
  Media: Media;
  MediaInput: MediaInput;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationType: NotificationType;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  Specialization: ResolverTypeWrapper<Specialization>;
  SpecializationCategory: SpecializationCategory;
  SpecializationInput: SpecializationInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  UpdateReviewInput: UpdateReviewInput;
  UpdateSpecializationInput: UpdateSpecializationInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateCommentInput: CreateCommentInput;
  CreateLawyerInput: CreateLawyerInput;
  CreatePostInput: CreatePostInput;
  CreateReviewInput: CreateReviewInput;
  CreateSpecializationInput: CreateSpecializationInput;
  Date: Scalars['Date']['output'];
  DeleteCommentInput: DeleteCommentInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Lawyer: Lawyer;
  MediaInput: MediaInput;
  Mutation: {};
  Notification: Notification;
  Post: Post;
  Query: {};
  Review: Review;
  Specialization: Specialization;
  SpecializationInput: SpecializationInput;
  String: Scalars['String']['output'];
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  UpdateReviewInput: UpdateReviewInput;
  UpdateSpecializationInput: UpdateSpecializationInput;
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LawyerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Lawyer'] = ResolversParentTypes['Lawyer']> = {
  achievements?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'input'>>;
  createLawyer?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<MutationCreateLawyerArgs, 'input'>>;
  createNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'clientId' | 'content' | 'lawyerId'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  createReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'input'>>;
  createSpecialization?: Resolver<ResolversTypes['Specialization'], ParentType, ContextType, RequireFields<MutationCreateSpecializationArgs, 'input'>>;
  deleteComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'input'>>;
  deleteLawyer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteLawyerArgs, 'lawyerId'>>;
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'postId'>>;
  deleteReview?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'reviewId'>>;
  deleteSpecialization?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSpecializationArgs, 'categoryName'>>;
  markNotificationAsRead?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationMarkNotificationAsReadArgs, 'notificationId'>>;
  updateComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'input'>>;
  updateLawyer?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<MutationUpdateLawyerArgs, 'input' | 'lawyerId'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'input' | 'postId'>>;
  updateReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'input' | 'reviewId'>>;
  updateSpecialization?: Resolver<ResolversTypes['Specialization'], ParentType, ContextType, RequireFields<MutationUpdateSpecializationArgs, 'categoryName' | 'input'>>;
};

export type NotificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NotificationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['MediaInput'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialization?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCommentsByPost?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentsByPostArgs, 'postId'>>;
  getLawyerById?: Resolver<Maybe<ResolversTypes['Lawyer']>, ParentType, ContextType, RequireFields<QueryGetLawyerByIdArgs, 'lawyerId'>>;
  getLawyers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lawyer']>>>, ParentType, ContextType>;
  getLawyersBySpecialization?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lawyer']>>>, ParentType, ContextType, RequireFields<QueryGetLawyersBySpecializationArgs, 'specialization'>>;
  getNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryGetNotificationsArgs, 'userId'>>;
  getNotificationsClient?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryGetNotificationsClientArgs, 'userId'>>;
  getNotificationsLawyer?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryGetNotificationsLawyerArgs, 'userId'>>;
  getPostById?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, 'postId'>>;
  getPostsByLawyer?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostsByLawyerArgs, 'lawyerId'>>;
  getPostsBySpecializationId?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostsBySpecializationIdArgs, 'specializationId'>>;
  getReviewsByLawyer?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryGetReviewsByLawyerArgs, 'lawyerId'>>;
  getReviewsByUser?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryGetReviewsByUserArgs, 'clientId'>>;
  getSpecializationByCategory?: Resolver<Maybe<ResolversTypes['Specialization']>, ParentType, ContextType, RequireFields<QueryGetSpecializationByCategoryArgs, 'categoryName'>>;
  getSpecializations?: Resolver<Array<ResolversTypes['Specialization']>, ParentType, ContextType>;
  getSpecializationsByLawyer?: Resolver<Array<ResolversTypes['Specialization']>, ParentType, ContextType, RequireFields<QueryGetSpecializationsByLawyerArgs, 'lawyerId'>>;
  searchPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerySearchPostsArgs, 'query'>>;
};

export type ReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  clientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lawyerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecializationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Specialization'] = ResolversParentTypes['Specialization']> = {
  categoryName?: Resolver<ResolversTypes['SpecializationCategory'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pricePerHour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Lawyer?: LawyerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Specialization?: SpecializationResolvers<ContextType>;
};

