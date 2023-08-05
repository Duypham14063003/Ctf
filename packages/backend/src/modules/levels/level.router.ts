import * as express from 'express';
import { createLevelValidator } from './validators/create-level.validator';
import Container from 'typedi';
import { LevelController } from './level.controller';
import authTokenVerifyMiddleware from '../../common/middleware/auth.middleware';
import adminRoleMiddleware from '../../common/middleware/admin-role.middleware';
import { checkAnswerValidator } from './validators/check-answer.validator';
const levelRouter = express.Router({mergeParams: true});
const levelController = Container.get(LevelController);

levelRouter.use(authTokenVerifyMiddleware);
levelRouter.post('/:levelId/check', checkAnswerValidator, levelController.checkAnswer);

levelRouter.use(adminRoleMiddleware);
levelRouter.post('/', createLevelValidator, levelController.create);

export default levelRouter;
