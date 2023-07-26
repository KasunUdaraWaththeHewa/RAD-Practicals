const numbers = [1, 2, 3, 4, 5];

function squareNumber(number) {
  return number * number;
}
const squares = numbers.map(squareNumber);

console.log(squares);
