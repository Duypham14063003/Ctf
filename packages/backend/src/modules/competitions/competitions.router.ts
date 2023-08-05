import { createCompetitionValidator } from './validators/create-competition.validator';
import authTokenVerifyMiddleware from '../../common/middleware/auth.middleware';
import * as express from 'express';
import adminRoleMiddleware from '../../common/middleware/admin-role.middleware';
import { validationResults } from '../../common/utils/validation-result';
import { Container } from 'typedi';
import CompetitionController from './competitions.controller';
// import participantRouter from '../participants/patitcipant.router';

const competitionRouter = express.Router();
const competitionController = Container.get(CompetitionController);

competitionRouter.get('/', competitionController.findAll);
competitionRouter.get('/:uid', competitionController.findOne);
competitionRouter.use(authTokenVerifyMiddleware, adminRoleMiddleware);
competitionRouter.post(
  '/',
  createCompetitionValidator,
  validationResults,
  competitionController.create
);

export default competitionRouter;