import readLineSync from 'readline-sync';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenCheck = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    }else if (num % 2 !== 0) {
        return 'no';
    }
};

const even = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    for (let i = 0; i < 3; i++) {
        let number = getRandomInt(1, 30);
        console.log(`Question: ${number}`);
        let answer = readLineSync.question('Your answer: ');
        if (answer === evenCheck(number)) {
            console.log('Correct!');
            if (i === 2) {
                console.log('Congratulations');
            };
        }
    }
    
};

export default even;