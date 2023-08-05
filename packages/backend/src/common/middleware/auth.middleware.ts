import { NextFunction } from 'express';
import { getAuth } from 'firebase-admin/auth';
import * as express from 'express';

const authTokenVerifyMiddleware = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const tokenString = req.headers['authorization']?.split(' ');
  if (!tokenString || !tokenString[1]) {
    return res.status(401).send('No header provided');
  }

  try {
    const decodedToken = await getAuth().verifyIdToken(tokenString[1]);
    req.headers.user = JSON.stringify(decodedToken);
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: 'Unauthorized' });
  }
  next();
};

export default authTokenVerifyMiddleware;
