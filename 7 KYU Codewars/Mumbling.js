function accum(s) {
    //declare an array, join with "-"
   let newArray= [];
    const lowerCaseStr= s.toLowerCase();
    
    //go through each letter and push
    for (let i=0; i<s.length; i++ ){
    //individual strings
      let smallstr = lowerCaseStr.charAt(i).toUpperCase();
      for (let j=0; j<i; j++) {
        smallstr += lowerCaseStr.charAt(i);
      }
      newArray.push(smallstr);
    }
    // deliver joined string
    return newArray.join('-');
  }