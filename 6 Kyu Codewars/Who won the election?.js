function getWinner(listOfBallots) {
    let candidates = {}
    for (let i=0; i<listOfBallots.length; i++){
      if (candidates.hasOwnProperty(listOfBallots[i])) candidates[listOfBallots[i]]++;
      else candidates[listOfBallots[i]] = 1;
    }
     console.log(Object.values(candidates))
     return Object.keys(candidates).find(x => candidates[x]> listOfBallots.length/2) || null
   }