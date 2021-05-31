import readLineSync from 'readline-sync';
import cli from '../cli.js';
import makeProgression from './makeProgression.js';

const index = () => {
  const useName = cli();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i++) {
    const array = makeProgression();

    console.log(`Question: ${array[0].join(' ')}`);
    const answer = readLineSync.question('Your answer: ');

    if (+answer === array[1]) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${array[1]}'.`);
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default index;
