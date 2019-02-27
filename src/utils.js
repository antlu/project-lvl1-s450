// Integer generator
// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min = -10, max = 10) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
