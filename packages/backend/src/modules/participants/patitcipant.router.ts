import * as express from 'express';
import authTokenVerifyMiddleware from '../../common/middleware/auth.middleware';
import adminRoleMiddleware from '../../common/middleware/admin-role.middleware';
import { baseParticipantValidator } from './validators/base-participant.validator';
import Container from 'typedi';
import { ParticipantController } from './participant.controller';

const participantRouter = express.Router({mergeParams: true});
const participantController = Container.get(ParticipantController);

participantRouter.use(authTokenVerifyMiddleware);
participantRouter.post('/register', baseParticipantValidator, participantController.register);

participantRouter.use(adminRoleMiddleware);
participantRouter.get('/:uid', baseParticipantValidator, participantController.findOne);

export default participantRouter;