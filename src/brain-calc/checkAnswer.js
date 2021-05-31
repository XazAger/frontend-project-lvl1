const checkAnswer = (num1, num2, currentOperator) => {
  let result = 0;
  if (currentOperator === '+') {
    result = num1 + num2;
  } else if (currentOperator === '*') {
    result = num1 * num2;
  } else if (currentOperator === '-') {
    result = num1 - num2;
  }
  return result;
};

export default checkAnswer;
