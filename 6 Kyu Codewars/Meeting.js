function meeting(s) {
    //split string by name
    let array = s.toUpperCase().split(';')
    //split string by first and last, swap
   array = array.map(name => name.split(':'))
    console.log(array)
   array = array.map(subarray => {
     let temp = subarray[0]; 
     subarray[0] = subarray[1];
    subarray[1] = temp;
     return subarray;
   });
    //sort based on last name, then first name if necessary
    array.sort((a,b) => {
      if (a[0] == b[0]){
        return a[1].localeCompare(b[1])
      }
      else return a[0].localeCompare(b[0])
    })
    array = array.map(subarray => `(${subarray[0]}, ${subarray[1]})`)
    return array.join('');
  }