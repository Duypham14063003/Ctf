import competitionRouter from './modules/competitions/competitions.router';
import participantRouter from './modules/participants/patitcipant.router';
import * as express from 'express';
import levelRouter from './modules/levels/level.router';
import profileRouter from './modules/profile/profile.router';

const router = express.Router();

router.use('/competition', competitionRouter);
router.use('/competition/:competitionId/participant', participantRouter);
router.use('/competition/:competitionId/level', levelRouter);
router.use('/profile', profileRouter);

router.use(express.json());
// router.use(cors(corsOptions));

export default router;
