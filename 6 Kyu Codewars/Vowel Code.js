function encode(string) {
    let key = {
      a:1,
      e:2,
      i:3,
      o:4,
      u:5,
    }
    let newArray = string.split('').map( letter => {
      if (letter in key) return key[letter]
      else return letter;
    });
    console.log(newArray);
    return newArray.join('');
  };
  
  function decode(string) {
    let key = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
    }
    return string.split('').map( x => {
      if (x in key) return key[x];
      else return x;
    }).join('');
  }