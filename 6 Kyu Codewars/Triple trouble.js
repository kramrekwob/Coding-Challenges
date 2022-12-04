function tripledouble(num1, num2) {
    let arrayOfTrips = num1.toString().match(/(.)\1{2,}/g);
    console.log(arrayOfTrips)
    if (arrayOfTrips == undefined) return 0;
    let doubles = arrayOfTrips.map(x => x.slice(0,2))
    console.log(doubles)
    if (doubles.some( y => num2.toString().includes(y))) return 1;
    else return 0;
  }