import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationResults = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(typeof errors.array()[0]);
    return res.status(422).send({ errors: errors.array() });
  }
  next();
};
