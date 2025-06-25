type Context = {
    req: Request;
    userId: string | null;
    username: string | null;
    role: string | null;
    clientId: string | null;
    lawyerId: string | null;
    db: any;
  };