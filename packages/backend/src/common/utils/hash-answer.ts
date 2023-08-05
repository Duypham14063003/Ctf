import * as bcrypt from 'bcrypt';
export const hashAnswer = async (answer: string, saltRound = 8) => {
  return await bcrypt.hash(answer, saltRound);
};
