import readLineSync from 'readline-sync';
import cli from '../cli.js';
import hiddenNum from './hiddenNum.js';
import makeProgression from './makeProgression.js';

const index = () => {
  const useName = cli();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const sequense = makeProgression();
    const reply = hiddenNum(sequense);

    console.log(`Question: ${reply}`);
    const answer = readLineSync.question('Your answer: ');

    if (+answer === reply[1]) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${useName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reply[1]}'.`);
      console.log(`Let's try again, ${useName}!`);
      break;
    }
  }
};

export default index;