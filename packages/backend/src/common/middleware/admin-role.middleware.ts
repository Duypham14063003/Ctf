import { NextFunction, Request, Response } from 'express';
import AdminRepository from '../../modules/admin/admin.repository';
import Container from 'typedi';

const adminRoleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = JSON.parse(req.headers.user as string);
  const adminRepository = Container.get(AdminRepository);
  if (!adminRepository.isExist(user.email)) {
    return res.status(403).send({ message: 'FORBIDDEN' });
  }
  next();
};
export default adminRoleMiddleware;
