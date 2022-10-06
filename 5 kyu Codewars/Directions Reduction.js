function dirReduc(arr){
    //map of direction reducers 
    let map = { NORTH: 'SOUTH', 
              SOUTH: 'NORTH',
             EAST: 'WEST',
              WEST: 'EAST'}
    for (let i=1; i<arr.length; i++){
      let key = arr[i];
      let last = arr[i-1];
      if (map[key]===last){
      arr.splice(i-1, 2);
      i=0; }
    }
    return  arr;
  }