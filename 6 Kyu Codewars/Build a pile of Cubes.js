function findNb(m) {
    //temp max variable
      let temp = m;
    //1st cube
      let i = 1;
  //subtract 1 volume
  do {
    temp = temp - i**3;
    if (temp===0) return i;
    i++;
  } while (temp>0);
  
  return -1;
  
      }