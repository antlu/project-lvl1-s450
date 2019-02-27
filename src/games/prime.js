import getRandomNumber from '../utils';
import launchGame from '..';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const goal = 'Answer "yes" if the number is prime, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 601);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => launchGame(goal, getQuestionAndAnswer);
