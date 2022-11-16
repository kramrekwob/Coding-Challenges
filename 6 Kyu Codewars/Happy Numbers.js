function isHappy(n) {
    //memo
    let memo = {};
    if (n == 1) return true;
    while (n !== 1) {
      //do happy operation
      n = n.toString().split('').map(y => (~~y) * (~~y)).reduce((a,b) => a + b)
      console.log(n)
      //if n == 1 happy
      if (n == 1) return true;
      if (memo[n] == true) return false;
      memo[n] = true;
    }
  }