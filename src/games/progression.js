import { getRandomNumber } from '../utils';
import launchGame from '..';

const getSequenceOfNumbers = (start, step = 1, n = 10) => {
  const sequence = [];
  for (let i = 0, j = start; i < n; i += 1, j += step) {
    sequence[i] = j;
  }
  return sequence;
};

const goal = 'What number is missing in the progression?\n';
const getQuestionAndAnswer = () => {
  const sequence = getSequenceOfNumbers(getRandomNumber(0, 20), getRandomNumber(-5, 5));
  const i = getRandomNumber(0, sequence.length - 1);
  const answer = sequence[i];
  sequence[i] = '..';
  const question = sequence.join(' ');
  return [question, String(answer)];
};

export default () => launchGame(goal, getQuestionAndAnswer);
