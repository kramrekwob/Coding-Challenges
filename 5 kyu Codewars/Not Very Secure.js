function alphanumeric(string){
    let myRegEx = new RegExp(/^[A-Za-z0-9]+$/)
    return myRegEx.test(string)
  }