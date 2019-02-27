import { getRandomNumber } from '../utils';
import launchGame from '..';

const isEven = n => n % 2 === 0;

const goal = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => launchGame(goal, getQuestionAndAnswer);
