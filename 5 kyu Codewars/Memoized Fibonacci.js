
function fibonacci(n) {
    const memo = {};
    function fib(n) {
      if (n <=1) {
      return n
      }
    else if (memo[n]) {
      return memo[n]
      }
    else {
      let result = fib(n-2) + fib(n-1);
      memo[n] = result;
      return result;
    }
    }
    return fib(n);
  }