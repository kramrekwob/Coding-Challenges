function points(games) {
    let myscore=0
    let theirscore=0;
    for (let i=0; i<games.length; i++){
      let scores = games[i].split(':') 
      if (scores[0]>scores[1]) myscore +=3
      else if (scores[1]>scores[0])theirscore +=3
      else myscore +=1; theirscore+=1;
    }
    return myscore;
  }