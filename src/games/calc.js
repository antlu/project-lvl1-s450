import getRandomNumber from '../utils';
import launchGame from '..';

const goal = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getQuestionAndAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const i = getRandomNumber(0, operations.length - 1);
  const operation = operations[i];
  const question = `${numberOne} ${operation} ${numberTwo}`;
  let answer;
  switch (operation) {
    case '+':
      answer = numberOne + numberTwo;
      break;

    case '-':
      answer = numberOne - numberTwo;
      break;

    case '*':
      answer = numberOne * numberTwo;
      break;

    default:
      break;
  }
  return [question, String(answer)];
};

export default () => launchGame(goal, getQuestionAndAnswer);
