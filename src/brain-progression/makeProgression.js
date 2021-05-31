import getRandomInt from '../randomInt.js';

const makeProgression = () => {
  const array = [];
  const result = [];
  let begin = getRandomInt(1, 30);
  const step = getRandomInt(3, 5);
  const index = getRandomInt(0, 10);

  for (let i = 0; i < 10; i + 1) {
    begin += step;
    array.push(begin);
  }

  const hiddenNum = array[index];
  array[index] = '..';
  result.push(array, hiddenNum);

  return result;
};

export default makeProgression;
