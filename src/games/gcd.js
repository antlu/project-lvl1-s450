import { getRandomNumber } from '../utils';
import launchGame from '..';

const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return gcd(b, a % b);
};

const goal = 'Find the greatest common divisor of given numbers.\n';
const getQuestionAndAnswer = () => {
  const numberOne = getRandomNumber(0, 100);
  const numberTwo = getRandomNumber(-10, 10);
  const question = `${numberOne} ${numberTwo}`;
  const answer = gcd(numberOne, numberTwo);
  return [question, String(answer)];
};

export default () => launchGame(goal, getQuestionAndAnswer);
