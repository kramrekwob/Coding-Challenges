function diamond(n){
    if (n<=0 || n%2 !== 1) return null;
    let firsthalf = [];
    let secondhalf = [];
    for (let i=1; i<=n; i+=2) {
      let layer = ' '.repeat(Math.floor(n/2) - Math.floor(i/2)) + '*'.repeat(i) + '\n'
      firsthalf.push(layer)
      secondhalf.unshift(layer)
    }
    firsthalf.pop()
    return firsthalf.join('') + secondhalf.join('');
  }