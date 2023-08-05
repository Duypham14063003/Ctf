import * as express from 'express';
import Container from 'typedi';
import { ProfileController } from './profile.controller';
import authTokenVerifyMiddleware from '../../common/middleware/auth.middleware';

const profileRouter = express.Router({mergeParams: true});
const profileController = Container.get(ProfileController);
profileRouter.use(authTokenVerifyMiddleware);
profileRouter.post('/save', profileController.saveProfile);

export default profileRouter;