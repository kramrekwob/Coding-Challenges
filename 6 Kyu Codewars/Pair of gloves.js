function numberOfPairs(gloves) {
    let pairs = 0;
    let count = {}
    for (let color of gloves) {
      if (color in count) {
        count[color]++;
      } else {
        count[color] = 1;
      }
      if (count[color] === 2) {
        pairs++;
        count[color] = 0;
      }
    }
    return pairs;
  }