function sortArray(array) {
    let oddArray=array.filter(number=>number%2!==0).sort((a,b)=>a-b)
    console.log(oddArray)
    let counter=0;
    for (let i=0; i<array.length; i++){
      if (array[i]%2!==0){
        array[i]=oddArray[counter];
        counter++;
      }
    }
    return array;
    }