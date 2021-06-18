import getRandomInt from '../randomInt.js';

const hiddenNum = (array) => {
  const sequence = array;
  const index = getRandomInt(1, 10);
  const hiddenNumber = sequence[index];
  sequence[index] = '..';

  return [sequence.join(' '), hiddenNumber];
};

export default hiddenNum;