import readLineSync from 'readline-sync';
import cli from '../cli.js';
import randomInt from '../randomInt.js';
import randomSign from './randomSign.js';
import checkAnswer from './checkAnswer.js';

const signs = ['+', '*', '-'];

const index = () => {
  const useName = cli();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomInt(1, 10);
    const num2 = randomInt(1, 10);
    const sign = randomSign(signs);

    console.log(`Question: ${num1} ${sign} ${num2}`);
    const answer = readLineSync.question('Your answer: ');
    if (+answer === checkAnswer(num1, num2, sign)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkAnswer(num1, num2, sign)}'.`);
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default index;
