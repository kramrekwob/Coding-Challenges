function solution(str, ending){
    if (ending==="") return true;
    let compareStr= str.slice(-ending.length)
    return (compareStr===ending)
  }