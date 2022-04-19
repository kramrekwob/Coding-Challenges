function rot13(str) {
    let alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ciphered= "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return str.replace(/[a-z]/gi, letter=>ciphered[alphabet.indexOf(letter)] )
  }
  rot13("SERR PBQR PNZC");