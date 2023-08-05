import { body } from 'express-validator';

export const createCompetitionValidator = [
  body('name').notEmpty().withMessage('name is required').isString(),
  body('description')
    .notEmpty()
    .withMessage('description is required')
    .isString(),
  body('startTime').isISO8601().toDate().withMessage('invalid day received'),
  body('duration')
    .notEmpty()
    .withMessage('duration is required')
    .isInt({ min: 5 })
    .withMessage('duration must be greater than 5 minutes'),
  body('authors')
    .isArray()
    .withMessage('authors must be an array')
    .notEmpty()
    .withMessage('authors cannot be empty')
    .custom((value) => {
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] !== 'string') {
          throw new Error(`writers[${i}] must be a string`);
        }
      }
      return true;
    }),
  body('levels')
    .isArray()
    .withMessage('levels must be an array')
    .notEmpty()
    .withMessage('levels cannot be empty')
    .custom((value) => {
      for (let i = 0; i < value.length; i++) {
        if (
          typeof value[i].secret !== 'string' ||
          typeof value[i].desc !== 'string'
        ) {
          throw new Error(`writers[${i}] must be a string`);
        }
      }
      return true;
    }),
];
