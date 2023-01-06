function zeros (n) {
    // What are the steps for finding a factorial's trailing zeroes?
    // Take the number that you've been given the factorial of.
    // Divide by 5; if you get a decimal, truncate to a whole number.
    // Keep going with 5 to the next power
      let total = 0;
      let divisor = 5;
      while (n/divisor>=1) {
        let number = Math.floor(n/divisor);
        total += number;
        divisor *= 5;
      }
      return total;
    
    }