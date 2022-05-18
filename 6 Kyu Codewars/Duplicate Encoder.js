function duplicateEncode(word){
    //split word into array of individual letters, initialize answer array
let letterArray=word.split(''); 
let answer= ""
let bads = '()[]^$/\@{}'
//iterate across array, add either letter as needed
for (let i=0; i<letterArray.length; i++){
  let current
  if (bads.includes(letterArray[i])) {
    current = new RegExp(`\\${letterArray[i]}`, 'gi')
  }
  else {
    current= new RegExp(letterArray[i], 'gi');
  }
  let currentArray= word.match(current) || []
  if (currentArray.length>1) {
     answer += ")";
    } 
  else answer += "("
  }
return answer;
}
// could have done this WAAAAAY more easily with a map().  This was a really bad way to solve this! 