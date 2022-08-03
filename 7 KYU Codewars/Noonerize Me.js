function noonerize(numbers) {
    if (typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') return 'invalid array';
    let temp = numbers[0].toString().charAt(0);
   numbers[0] = numbers[1].toString().charAt(0) + numbers[0].toString().slice(1);
    numbers[1] = temp + numbers[1].toString().slice(1);
    return Math.abs(+numbers[0] - +numbers[1]);
  }