//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smileys = 0;
    let smileyRegex = /[:;][-~]?[D\)]/;
      for (let i=0; i<arr.length; i++){
        if (smileyRegex.test(arr[i])) smileys++
      }
      return smileys;
    }