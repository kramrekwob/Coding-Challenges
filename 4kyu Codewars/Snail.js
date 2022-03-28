snail = function(array) {
    //intialize answer array
    var answer;
    //while loop for non-empty array- is this the same as array.length? possibly remove
    while (array.length){
    answer = (answer ? answer.concat(array.shift()) : array.shift());
    //right side of the shell
    for(let i=0; i<array.length; i++) {
    answer.push(array[i].pop());
    }
    //bottom row
    answer= answer.concat((array.pop() || []).reverse());
    //lefthand side, bottom to top
    for (let j=array.length-1; j>=0; j--){
    answer.push(array[j].shift());
     }

     }
    return answer;
}