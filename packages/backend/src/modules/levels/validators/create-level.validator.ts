import { body } from 'express-validator';
import { baseLevelValidator } from './base-level.validator';
export const createLevelValidator = [
  body('name').notEmpty().withMessage('name is required').isString(),
  body('description')
    .notEmpty()
    .withMessage('description is required')
    .isString(),
  body('answer').notEmpty().withMessage('answer is required').isString(),
].concat(baseLevelValidator);
