function removeDuplicateWords (s) {
    let map = {};
    let array = s.split(' ');
    for (let i=0; i<array.length; i++){
      if (map[array[i]]) continue
      else map[array[i]] = true;
    }
    return Object.keys(map).join(' ')
  }
  const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')