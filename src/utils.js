import readlineSync from 'readline-sync';

// Integer generator
export const getRandomNumber = (min = -10, max = 10) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Greeting
export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
