function findMissingLetter(array)
{
  for (let i=1; i<array.length; i++){
    if (array[i].charCodeAt() != array[i-1].charCodeAt() + 1) return String.fromCharCode(array[i-1].charCodeAt()+1);
  }
  return ' ';
}