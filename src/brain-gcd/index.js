import readLineSync from 'readline-sync';
import getRandomInt from '../randomInt.js';
import commonDivisor from './commonDevisor.js';
import cli from '../cli.js';

const index = () => {
  const useName = cli();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i++) {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const result = commonDivisor(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const answer = readLineSync.question('Your answer: ');
    if (+answer === result) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default index;
