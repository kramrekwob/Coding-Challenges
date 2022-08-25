function printerError(s) {
    let array= s.split("");
    let errors=0;
    let denominator= s.length;
    for (let i=0 ;i<array.length; i++){
      let myRegex= /[a-m]/;
      if (!myRegex.test(array[i]))
        errors++;
  }
    return `${errors}/${denominator}`;
  }