const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const checkAnswer = (number) => {
  const answer = isPrime(number) ? 'yes' : 'no';
  return answer;
};

export default checkAnswer;