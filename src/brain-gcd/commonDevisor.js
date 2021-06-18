const commonDivisor = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return commonDivisor(b, c);
  }
  return a;
};

export default commonDivisor;