function sqInRect(lng, wdth){
    if (lng === wdth) return null;
    let answerArray = [];
   while (wdth>0){
     if (wdth<lng) {
       answerArray.push(wdth)
       lng -= wdth
     }
     else {answerArray.push(lng); wdth -= lng;}
   }
    return answerArray;
  }