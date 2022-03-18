function solve(arr){
    //sort array high to low
  const hiToLow = arr.sort((a,b)=> b - a);
  //if biggest stack is way bigger than other 2 its the limiting factor, return the sum of smaller 2
  if (hiToLow[0] >= hiToLow[1]+hiToLow[2])
    return hiToLow[1]+hiToLow[2];
//otherwise average of all 3 stacks rounded down is the number of trips
  else return Math.floor(((hiToLow[0] + hiToLow[1] + hiToLow[2])/2))

}