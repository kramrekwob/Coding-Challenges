function isValidIP(str) {
    let strArray= str.split('.')
    if (strArray.length !== 4) return false;
     console.log(strArray.map(x => parseInt(x, 10).toString() == x.toString()))
     
    return strArray.every( x => parseInt(x, 10).toString() == x.toString() && x >= 0 && x < 256 );
   }