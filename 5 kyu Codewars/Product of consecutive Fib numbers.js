function productFib(prod){
    let one=0;
    let two=1;
    while (prod > one * two) {
      let temp = one;
      one = two;
      two = temp + one;
    
    }
    if ((one * two) == prod) {return [one, two, true]}
    return [one, two,  false];
    }