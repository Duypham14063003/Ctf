import { body } from 'express-validator';

export const createCompetitionValidator = [
  body('name').optional({ nullable: true }).isString(),
  body('description').optional({ nullable: true }).isString(),
];
