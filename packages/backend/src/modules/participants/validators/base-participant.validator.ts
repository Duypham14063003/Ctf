import { param } from 'express-validator';

export const baseParticipantValidator = [
  param('competitionId').notEmpty().withMessage('competitonId is required').isString(),
];
