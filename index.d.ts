type Context = {
  req: NextRequest;
  userId?: string;
  db: mongoose.mongo.Db;
  lawyerId?: string;
  clientId?: string;
  username?: string;
  role?: string;
};
