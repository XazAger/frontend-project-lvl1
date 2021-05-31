import readLineSync from 'readline-sync';
import cli from '../cli.js';
import getRandomInt from '../randomInt.js';
import isPrime from '../brain-prime/isPrime.js';

const index = () => {
    const useName = cli();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    for(let i = 0; i < 3; i++) {
        let number = getRandomInt(1, 15);
        console.log(`Question: ${number}`);
        const answer = readLineSync.question('Your answer: ');
        if (answer === isPrime(number)) {
            console.log('Correct!');
            if (i === 2) {
                console.log(`Congratulations, ${useName}!`);
            };
        }else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(number)}'.`);
            console.log(`Let's try again, ${useName}!`);
            break;
        }
    }
}

export default index;