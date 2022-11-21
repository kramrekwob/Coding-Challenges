function validBraces(braces){
    //establish a stack which you can push opening parenth onto, pop closing parenth off
      let parensArray = braces.split('');
    //establish a map of the correct braces 
      let map = {
        ")": "(",
        "}": "{",
        "]": "["
      };
      let stack = [];
      for (let i=0; i < parensArray.length; i++){
        //if opener push to stack
        console.log(!map[parensArray])
        if (!map[parensArray[i]]) {
          stack.push(parensArray[i]);
          console.log(stack)}
      
        // if its a closer AND it is matching the top of the stack, pop
        else if ( stack[stack.length-1] == map[parensArray[i]] ) stack.pop();
        //anything else gets pushed
        else stack.push(parensArray[i]);
      }
      if (stack.length>0) return false
      else return true;
      
    }