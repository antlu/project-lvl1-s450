import readlineSync from 'readline-sync';

export const printProjectName = () => console.log('Welcome to Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const getRandomNumber = (max = 10) => Math.floor(Math.random() * (max + 1));
const isEven = n => n % 2 === 0;

const answersToWin = 3;


// Greeting
export const sayHello = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};


// Parity check
export const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const name = getName();

  for (let correctAnswers = 0; correctAnswers < answersToWin; correctAnswers += 1) {
    const question = getRandomNumber();
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer. The correct answer is ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};


// Calculator
export const calc = () => {
  console.log('What is the result of the expression?\n');

  const name = getName();
  const operations = ['+', '-', '*'];

  for (let correctAnswers = 0; correctAnswers < answersToWin; correctAnswers += 1) {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const i = getRandomNumber(operations.length - 1);
    const operation = operations[i];
    let correctAnswer;

    switch (operation) {
      case '+':
        correctAnswer = numberOne + numberTwo;
        break;

      case '-':
        correctAnswer = numberOne - numberTwo;
        break;

      case '*':
        correctAnswer = numberOne * numberTwo;
        break;

      default:
        break;
    }

    console.log(`\nQuestion: ${numberOne} ${operation} ${numberTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer. The correct answer is ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
