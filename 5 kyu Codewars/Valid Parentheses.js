function validParentheses(parens) {
    //establish a stack which you can push opening parenth onto, pop closing parenth off
      let parensArray = parens.split('');
      let stack = [];
      for (let i=0; i<parensArray.length; i++){
        if (parensArray[i] === "(" ) stack.push("(");
        
        if (parensArray[i] === ")" && stack[stack.length-1] === "(" ) stack.pop();
        else if (parensArray[i] === ")" ) return false;
      }
      if (stack.length>0) return false
      else return true;
      
    }