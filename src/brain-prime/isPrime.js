const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default isPrime;
