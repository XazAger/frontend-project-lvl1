import readLineSync from 'readline-sync';

import getRandomInt from '../src/getRandomInt.js';
import checkNum from '../src/checkNum.js';
import cli from '../src/cli.js';

const even = () => {
    const useName = cli();
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    for (let i = 0; i < 3; i++) {
        let number = getRandomInt(1, 30);
        console.log(`Question: ${number}`);
        let answer = readLineSync.question('Your answer: ');
        if (answer === checkNum(number)) {
            console.log('Correct!');
            if (i === 2) {
                console.log(`Congratulations, ${useName}`);
            };
        }else if (answer !== checkNum(number)) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log(`Let's try again, ${useName}!`);
            break;
        };
    }
    
};

export default even;