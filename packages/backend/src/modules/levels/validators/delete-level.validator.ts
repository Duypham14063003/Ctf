import { param } from 'express-validator';
import { baseLevelValidator } from './base-level.validator';
export const deleteLevelValidator = [
  param('levelId').notEmpty().withMessage('levelId is required').isString(),
].concat(baseLevelValidator);
