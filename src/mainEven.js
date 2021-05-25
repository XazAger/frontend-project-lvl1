import readLineSync from 'readline-sync';

import getRandomInt from './getRandomInt.js';
import checkNum from './checkNum.js';
import cli from './cli.js';

const even = () => {
  const useName = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i++) {
    const number = getRandomInt(1, 30);
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === checkNum(number)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}`);
      }
    } else if (answer !== checkNum(number)) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default even;
