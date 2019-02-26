import readlineSync from 'readline-sync';

export const printProjectName = () => console.log('Welcome to Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
export const getRandomNumber = (max = 10) => Math.floor(Math.random() * (max + 1));
export const isEven = n => n % 2 === 0;

const answersToWin = 3;


// Greeting
export const sayHello = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
};


// Game launcher
export const launchGame = (goal, getQuestion, getAnswer) => {
  console.log(goal);

  const name = getName();

  for (let correctAnswers = 0; correctAnswers < answersToWin; correctAnswers += 1) {
    const question = getQuestion();
    console.log(`\nQuestion: ${question}`);
    const correctAnswer = getAnswer(question);
    const answer = readlineSync.question('Your answer: ');

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
