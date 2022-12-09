function well(x){
    return x.filter(idea => idea == 'good').length > 2 ? 'I smell a series!' : x.filter(idea => idea == 'good').length > 0 ? 'Publish!' : 'Fail!'; 
  }