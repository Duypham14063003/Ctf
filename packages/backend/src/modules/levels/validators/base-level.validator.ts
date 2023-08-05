import { param } from 'express-validator';
export const baseLevelValidator = [
  param('competitionId')
    .notEmpty()
    .withMessage('competitionId is required')
    .isString(),
];
