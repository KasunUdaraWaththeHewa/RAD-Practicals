function reverse(input) {
    const characters = input.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
  }
  const input = 'Hello, World!';
  const reversedString = reverse(input);
  console.log(reversedString);
  