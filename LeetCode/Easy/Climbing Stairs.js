/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //fibonacci input number output number that is fibonacci but offset one
    if (n==0) return 0;
    if (n==1) return 1;
    if (n==2) return 2;
    let firstNum=1;
    let secondNum=2;
    let answer;
    for (let i=2; i<n; i++){
        answer = firstNum +secondNum;
        firstNum = secondNum;
        secondNum = answer;
        
    
    };
    return answer;
    };