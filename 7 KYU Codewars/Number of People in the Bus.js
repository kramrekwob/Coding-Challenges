var number = function(busStops){
    let people= 0;
    for (let i=0; i<busStops.length; i++){
      people += busStops[i][0];
      people -= busStops[i][1];
    }
    return people;
  }