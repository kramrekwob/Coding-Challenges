function encrypt(text, n) {
    //rule out annoying test cases
      if (n<=0 || !text) {return text}
  //1 round of encryption as smaller function
    const singleEncrypt= function(str) {
    //two halves of string
      let firstHalf="";
      let secondHalf="";
      for (i=0; i<str.length; i++){
        if (i%2) firstHalf += text[i];
        else secondHalf += text[i];}
      
      return firstHalf+secondHalf}
   //run as many encryptions as n needs
    for (j=0; j<n; j++){
       text = singleEncrypt(text);
      }
    return text;
    }
  function decrypt(encryptedText, n) {
  //weird test cases
  if (n==0 || encryptedText=="")
  return encryptedText;
  //decrypt 1 time
  const singleDecrypt = function(str){
  let firstHalf = str.slice(0, str.length/2);
  let secondHalf = str.slice(str.length/2);
  let output="";
    for (i=0; i<str.length; i++){
      if (i%2){
        output += firstHalf[0];
        //remove letter from chunk
        firstHalf = firstHalf.slice(1);}
      else {output += secondHalf[0];
            secondHalf = secondHalf.slice(1);}
    }
    return output;
  }
  //run as many decryptions in a row as needed
  
  for (j=0; j<n; j++){
    encryptedText = singleDecrypt(encryptedText);
  }
    return encryptedText;
    }