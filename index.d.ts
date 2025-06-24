 type Context = {
  req: NextRequest;
  userId?: string;
  db: mongoose.mongo.Db; 
};
