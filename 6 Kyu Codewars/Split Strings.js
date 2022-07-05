function solution(str){
    //given a string, return an array of 2 char strings, if odd add _
   let initialArray = str.split('');
   let answerArray=[];
   while (initialArray.length>1){
     answerArray.push(initialArray.splice(0,2).join(''));
   }
   if (initialArray.length==1) answerArray.push(initialArray[0]+'_');
   return answerArray;
 }