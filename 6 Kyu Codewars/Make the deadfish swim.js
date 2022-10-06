// Return the output array, and ignore all non-op characters
function parse( data )
{
  let array= data.split('')
  let returnArray = [];
  let value=0;
  for (let i=0; i<array.length; i++){
    switch (array[i]){
        case "i": value++; break;
        case "d": value--; break;
        case "s": value = value**2; break;
        case "o": returnArray.push(value);
    }
  }
  return returnArray;
}