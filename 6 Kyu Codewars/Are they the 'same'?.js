function comp(array1, array2){
    // handle nulls or emptys
    if (array1===null || array2===null) return false;
   //sort array1 and square each element
  let compare1 = array1.sort((a,b)=>a-b).map(i => i**2);
  let compare2 = array2.sort((a,b)=>a-b)
  console.log(compare1, compare2)
  return compare1.every((element,index) => element === compare2[index]);
  }