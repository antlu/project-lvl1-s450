import readlineSync from 'readline-sync';

const answersToWin = 3;

// Game launcher
const launchGame = (goal, getQuestionAndAnswer) => {
  console.log('Welcome to Brain Games!');
  console.log(`${goal}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let correctAnswers = 0; correctAnswers < answersToWin; correctAnswers += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`\nQuestion: ${question}`);
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

export default launchGame;
