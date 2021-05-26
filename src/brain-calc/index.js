import readLineSync from 'readline-sync';
import cli from '../cli.js';
import randomInt from '../randomInt.js';
import randomOperate from './randomOperate.js';
import checkAnswer from './checkAnswer.js';

const operate = ['+', '*', '-'];

const index = () => {
    const useName = cli();
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i++) {
        const num1 = randomInt(1, 30);
        const num2 = randomInt(1, 30);
        const currentOperate = randomOperate(operate);

        console.log(`Question: ${num1} ${currentOperate} ${num2}`);
        const answer = readLineSync.question('Your answer: ');
        if (Number(answer) === checkAnswer(num1, num2, currentOperate)) {
            console.log('Correct!');
            if (i === 2) {
              console.log(`Congratulations, ${useName}`);
            }
        }else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkAnswer(num1, num2, currentOperate)}'.`);
            console.log(`Let's try again, ${useName}!`);
            break;
        }
    }
}

export default index;