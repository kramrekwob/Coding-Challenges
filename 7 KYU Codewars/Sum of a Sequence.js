const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    let steps = []
    for (let i=begin; i<=end; i+= step){
      steps.push(i)
      }
    return steps.reduce((a,b)=>a+b)
  };