import { getRandomNumber } from '../utils';
import launchGame from '..';

const getStringOfNumbers = (start, step = 1, n = 10) => {
  const sequence = [];
  for (let i = 0, j = start; i < n; i += 1, j += step) {
    sequence[i] = j;
  }
  return sequence;
};

const goal = 'What number is missing in the progression?\n';
const getQuestionAndAnswer = () => {
  const progression = getStringOfNumbers(getRandomNumber(0, 20), getRandomNumber(-5, 5));
  const i = getRandomNumber(0, progression.length - 1);
  const answer = progression[i];
  progression[i] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => launchGame(goal, getQuestionAndAnswer);
