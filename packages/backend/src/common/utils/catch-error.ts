import { Request, Response, NextFunction } from 'express';
import ApiError from './api-error';

const catchAsync =
  (fn) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.log(err)
      if (err instanceof ApiError) {
        res.status(err.statusCode).json({
          message: err.message,
        });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  };

export default catchAsync;
