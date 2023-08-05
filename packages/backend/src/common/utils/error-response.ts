import { Response, Request, NextFunction } from 'express';
import ApiError from './api-error';

const errorResponse = (
  error: TypeError | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(error instanceof ApiError)) {
    error = new ApiError(500, 'Internal Server Error');
  }
  if (error instanceof ApiError) {
    res.status(error.statusCode || 500).send({
      statusCode: error.statusCode,
      messase: error.message,
    });
  }
};

export default errorResponse;
