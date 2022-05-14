function isValidWalk(walk) {
    let north=0;
    let east=0;
   for (let i=0; i<10; i++){
    if (walk[i]==='n') {north++}
    if (walk[i]==='s') {north--}
     if (walk[i]==='e') {east++}
     if (walk[i]==='w') {east--}
   }
  if (walk.length!==10) return false
  return (east===0 && north===0);
  }