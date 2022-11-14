function pyramid(n) {
    //base cases
    if (n==0) return [];
    let answer = [];
    for (let i=1; i<=n; i++){
      answer.push(new Array(i).fill(1))
      console.log(new Array(i).fill(1))
    }
    return answer
  }