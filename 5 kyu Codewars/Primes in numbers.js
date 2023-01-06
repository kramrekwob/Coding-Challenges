function primeFactors(n){
    //first actually collect the primes into a collection
     let i = 2;
      let collection = {};
      while (n/i !== 1) {
        //if you've hit zero add it to the collection
        if (n%i == 0) {
          //if doesnt exist set to one
          if(!collection[i]) collection[i] = 1
          else collection[i] += 1;
          //another loop
          n = n/i;
        }
      else i++;
      }
    //insert final number
      if (collection[n]) collection[n]++
      else collection[n] = 1;
    //next return them formatted appropriately
      let sentence = '';
      for (let item in collection){
        if (collection[item] == 1) sentence += `(${item})`
        else sentence+= `(${item}**${collection[item]})`
      }
    return sentence;
      
    }
    