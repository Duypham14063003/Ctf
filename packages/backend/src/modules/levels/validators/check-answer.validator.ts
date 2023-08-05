import { body } from 'express-validator';
import { deleteLevelValidator } from './delete-level.validator';

export const checkAnswerValidator = [
  body('answer').notEmpty().withMessage('answer is required').isString(),
].concat(deleteLevelValidator);
