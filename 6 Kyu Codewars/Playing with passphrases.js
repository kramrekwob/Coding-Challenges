function playPass(s, n) {
    function weirdness (item, index) {
      if (item==='0') return 9;
      if (+item) return 9 - item;
      if (item.match(/[a-z]/i)) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let newIndex = alphabet.indexOf(item.toLowerCase()) + n;
        if (newIndex >= alphabet.length) newIndex = -(alphabet.length - newIndex);
        if (index%2==0) return alphabet[newIndex].toUpperCase();
        if (index%2==1) return alphabet[newIndex];
        }
      else return item;
    }
    return s.split('').map((x,index) => weirdness(x,index)).reverse().join('')
   }