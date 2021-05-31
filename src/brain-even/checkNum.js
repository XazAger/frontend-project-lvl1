const checkNum = (num) => {
  let answer = null;
  if (num % 2 === 0) {
    answer = 'yes';
  } else if (num % 2 !== 0) {
    answer = 'no';
  }
  return answer;
};

export default checkNum;
