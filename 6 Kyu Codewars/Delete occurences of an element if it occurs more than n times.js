function deleteNth(arr,n){
    //use hash for one single pass O(N);
    //map of properties with counts
    let hashMap = {};
    //answers get pushed
    let answerArray = [];
    //one interation
    for (let i=0; i<arr.length; i++){
    //if key exists, update value by one
       if (hashMap.hasOwnProperty(arr[i])){
        if (hashMap[arr[i]] < n) answerArray.push(arr[i]);
        hashMap[arr[i]] ++;
      }
    //if key doesnt exist, create it and add to array
      else if (!hashMap.hasOwnProperty(arr[i])) {
        hashMap[arr[i]] = 1;
        answerArray.push(arr[i]);
        }
     
  
      
    }
    return answerArray;
  }