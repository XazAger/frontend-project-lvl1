const checkAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return num1 - num2;
  }
};

export default checkAnswer;
