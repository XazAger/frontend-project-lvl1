import readLineSync from 'readline-sync';

const cli = () => {
    let name = readLineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}

export default cli;