function isSortedAndHow(array) {
    let ascending = array.every((item,index) => {
      if (index == 0) {
        return true 
      } else {
        return array[index-1] <= item
        }});
    let descending = array.every((item,index) => { 
      if (index == 0) {
       return true 
      } else {
        return array[index-1] >= item
        }});
  if (!ascending && !descending) return 'no';
  if (ascending) return 'yes, ascending';
  if (descending) return 'yes, descending';
  }