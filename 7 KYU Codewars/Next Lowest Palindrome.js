function nextPal(val) {
    let num = val+1;
  //helper function takes number, returns bool if it is palindrome or not
  function isPalindrome(n)  {
    //type coercion
    return n == (n.toString().split('').reverse().join(''))
  }
 while (!isPalindrome(num)){
   num++
 }
return num;
    }