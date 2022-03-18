function inArray(array1,array2){
    //declare empty array for answer
      let answer = [];
  //iterate through loop1 looking for loop2
      array1loop: for (j = 0; j < array1.length; j++) {
          for (i = 0; i < array2.length; i++) {
            //duplicates not allowed so have to close loop1 if found, push to answer
              if (array2[i].includes(array1[j])) {
                  answer.push(array1[j]);
                  continue array1loop;
              }
          }
      }
    //has to be alphabetical, sort
      return answer.sort();
  }
