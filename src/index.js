import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');

// Greeting
export const sayHello = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};

// Parity game
export const evenNumber = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 101);
  const isEven = n => (n % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const name = getName();
  const answersToWin = 3;
  let correctAnswers = 0;
  let number = getRandomNumber();
  let answer;
  let correctAnswer;

  while (correctAnswers < answersToWin) {
    console.log(`\nQuestion: ${number}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = isEven(number);
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
      number = getRandomNumber();
    } else {
      console.log(`${answer} is a wrong answer. The correct answer is ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
