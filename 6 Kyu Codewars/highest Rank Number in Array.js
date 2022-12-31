
function highestRank(arr){
  let object = {};
  let highestCount=0;
  let highestNumber;
  for (let i=0; i<arr.length; i++){
    if (arr[i] in object) object[arr[i]] += 1;
    else object[arr[i]] = 1;
    if (object[arr[i]] > highestCount) {
      highestCount = object[arr[i]];
      highestNumber = arr[i];
    }
    //optimization
    if (object[arr[i]] >= arr.length/2) return arr[i];
  }
  return highestNumber;
}