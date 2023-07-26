function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  console.log("Enter positive integer number below");
  const inputNumber = 5;
  const result = factorial(inputNumber);
  console.log(`Factorial of ${inputNumber} is: ${result}`);
  