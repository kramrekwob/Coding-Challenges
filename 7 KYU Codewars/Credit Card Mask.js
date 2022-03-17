// return masked string
function maskify(cc) {
    let newArray = []
    for (i=0; i<cc.length; i++) {
    if (i<cc.length-4)
        {newArray.push("#")}
    else 
    {newArray.push(cc[i])}
  }
    return newArray.join("");
  }