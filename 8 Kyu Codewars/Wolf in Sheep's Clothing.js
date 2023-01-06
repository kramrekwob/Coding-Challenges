function warnTheSheep(queue) {
    let sheepnumber = queue.length - 1 - queue.indexOf('wolf');
    
    return queue[queue.length-1] == 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepnumber}! You are about to be eaten by a wolf!`
  }