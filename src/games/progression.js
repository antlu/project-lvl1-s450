import getRandomNumber from '../utils';
import launchGame from '..';

const getSequenceOfNumbers = (start, n, step) => {
  const sequence = [];
  for (let i = 0; i < n; i += 1) {
    sequence[i] = start + step * i;
  }
  return sequence;
};

const goal = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const startFrom = getRandomNumber(0, 30);
  const sequenceLength = 10;
  const changeStep = getRandomNumber(-10, 10);
  const sequence = getSequenceOfNumbers(startFrom, sequenceLength, changeStep);
  const hiddenElementIndex = getRandomNumber(0, sequence.length - 1);
  const answer = sequence[hiddenElementIndex];
  sequence[hiddenElementIndex] = '..';
  const question = sequence.join(' ');
  return [question, String(answer)];
};

export default () => launchGame(goal, getQuestionAndAnswer);
