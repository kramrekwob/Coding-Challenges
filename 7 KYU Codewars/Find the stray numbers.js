function stray(numbers) {
    if (numbers[0]!==numbers[1] && numbers[1]===numbers[2]) return numbers[0];
    if (numbers[0]!==numbers[1] && numbers[0]===numbers[2]) return numbers[1];
    //else return the first number that doesnt equal the first number
  for (let i=1; i<numbers.length; i++){
    if (numbers[i] !== numbers[0]) return numbers[i];
  }
  }