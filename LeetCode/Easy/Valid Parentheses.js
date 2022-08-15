var isValid = function(s) {
//brute force
    let arrayOfParen = s.split('');
//stack structure
    let stack = [];

    for (let i=0; i < arrayOfParen.length; i++){
    //if valid opener, push onto stack
        if (arrayOfParen[i]==="(" || arrayOfParen[i]==="{" || arrayOfParen[i]=== "[" ){
            stack.push(arrayOfParen[i])
            continue;
        }
    //valid closers, pop off stack
        if (arrayOfParen[i]==="}" && stack[stack.length-1]==="{"){
            stack.pop();
            continue;
            }
        if (arrayOfParen[i]==="]" && stack[stack.length-1]==="["){
        stack.pop();
        continue;
        }
        if (arrayOfParen[i]===")" && stack[stack.length-1]==="("){
        stack.pop();
        continue;
        }
    //anything else is invalid and pushes on, never will be cleared
        else stack.push(arrayOfParen[i])
    }
    return (stack.length==0)
};