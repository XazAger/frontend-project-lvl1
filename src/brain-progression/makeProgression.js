import getRandomInt from '../randomInt.js';

const makeProgression = () => {
  const result = [];
  let number = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);

  for (let i = 0; i <= 10; i += 1) {
    number += step;
    result.push(number);
  }

  return result;
};

export default makeProgression;
