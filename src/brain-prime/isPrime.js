const isPrime = (number) => {
    for( let i = 2; i * i <= number; i ++) { 
      if( number % i == 0 ) {
        return 'no';
      }
    }
  return 'yes';
}

export default isPrime;