import readLineSync from 'readline-sync';

import randomInt from '../randomInt.js';
import checkAnswer from './checkAnswer.js';
import cli from '../cli.js';

const index = () => {
  const useName = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = randomInt(1, 10);
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === checkAnswer(number)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkAnswer(number)}'.`);
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default index;
