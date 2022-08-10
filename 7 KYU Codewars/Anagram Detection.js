// write the function isAnagram
var isAnagram = function(test, original) {
    let array1 = test.toLowerCase().split('').sort();
    let array2 = original.toLowerCase().split('').sort();
    return JSON.stringify(array1) === JSON.stringify(array2)
  };
  