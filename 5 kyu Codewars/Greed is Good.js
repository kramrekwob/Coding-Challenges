function score( dice ) {
    //sort for easy comparison
   let mutated = dice.sort((a,b)=>a-b)
   let score = 0;
  //score object
   let scores = { 1 : 1000, 6 : 600, 5 : 500, 4: 400, 3: 300, 2: 200
   }
    for (let i=0; i < 5; i++){
      if (mutated[i] == mutated [i+1] && mutated[i + 1] == mutated[i + 2]){
        score += scores[mutated[i]]; 
        //skip next 2 so they dont get counted twice
        i+=2;
      }
    //otherwise check for lesser scores
     else if (mutated[i]==5) score += 50;
      else if (mutated[i]==1) score += 100;
    }
    return score;
   }