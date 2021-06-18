const checkNum = (num) => num % 2 === 0;

const rightAnswer = (num) => {
  const answer = checkNum(num) ? 'yes' : 'no';
  return answer;
}

export default rightAnswer;
