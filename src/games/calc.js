import { getRandomNumber, launchGame } from '..';

const goal = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];
const getQuestion = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const i = getRandomNumber(operations.length - 1);
  const operation = operations[i];
  return `${numberOne} ${operation} ${numberTwo}`;
};
const getAnswer = (question) => {
  const parsedQuestion = question.split(' ');
  const numberOne = Number(parsedQuestion[0]);
  const operation = parsedQuestion[1];
  const numberTwo = Number(parsedQuestion[2]);
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
  return String(answer);
};
export default () => launchGame(goal, getQuestion, getAnswer);
