String.prototype.toJadenCase = function (string) {
    return this.split(' ').map( x => x.charAt(0).toUpperCase()+x.slice(1)).join(" ")
  };
  