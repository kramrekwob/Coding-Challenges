function moveZeros(arr) {
    arr.sort(function(key1,key2) {
///have to test both key1 and key2 for 0 otherwise the sort wont be stable, have to use strict equality
     if (key1===0 && key2!==0) return 1;
     if( key1!==0 &&key2===0)  return -1;
      if(key2===0 &&key2===0) return 0;
//dont move them at all if neither term is 0
     return 0;
   });    
   return arr;
 }