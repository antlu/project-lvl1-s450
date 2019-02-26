import { getRandomNumber, isEven, launchGame } from '..';

const goal = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const getQuestion = getRandomNumber;
const getAnswer = question => (isEven(question) ? 'yes' : 'no');
export default () => launchGame(goal, getQuestion, getAnswer);
