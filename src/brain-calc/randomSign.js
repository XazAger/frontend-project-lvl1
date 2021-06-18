import randomInt from '../randomInt.js';

const randomSign = (arr) => arr[randomInt(0, arr.length - 1)];

export default randomSign;