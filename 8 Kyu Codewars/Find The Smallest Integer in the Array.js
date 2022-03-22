class SmallestIntegerFinder {
    findSmallestInt(args) {
      let answer= args[0];
      for (let i=0; i<args.length; i++){
  if (args[i]<answer){
      answer= args[i]
    }
        
    }
    return answer;
  }
    }