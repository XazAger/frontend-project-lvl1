import randomInt from '../randomInt.js';

const randomOperate = (arr) => {
    return arr[randomInt(0, arr.length - 1)];
}

export default randomOperate;