var findMissing = function (list) {  
    let incrementer = (list[list.length-1]  - list[0])/ list.length
    for (let i=0; i<list.length; i++){
      if (list[i] !== list[0] + incrementer * i ) return (list[i-1] + incrementer)
    }
  }