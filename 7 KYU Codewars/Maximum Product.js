function adjacentElementsProduct(array) {
    let currentMax=array[0]*array[1];
   for ( let i=0; i<array.length; i++){
     if (array[i]*array[i-1]>currentMax){
       currentMax= array[i]*array[i-1]
     }
   }
    return currentMax;
  }