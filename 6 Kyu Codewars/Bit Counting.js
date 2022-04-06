var countBits = function(n) {
    // Program Me
    if (n) {return n.toString(2).match(/1/g).length}
  else return 0
  };