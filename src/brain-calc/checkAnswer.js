const checkAnswer = (num1, num2, currentOperator) => {
    if (currentOperator === '+') return num1 + num2;
    else if (currentOperator === '*') return num1 * num2;
    else if (currentOperator === '-') return num1 - num2;
};

export default checkAnswer;