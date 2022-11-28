Array.prototype.square = function() {
    return this.map(x => x**2);
  }
  console.log([1,2].square())
  Array.prototype.cube = function() {
    return this.map(x => x**3)
  }
  Array.prototype.average = function () {
    if (this.length == 0) return NaN;
    return this.reduce((acc, b)=> acc + b)/this.length;
  }
  Array.prototype.sum = function() {
    
    if (this.length == 0) return NaN;
    return this.reduce((a,b)=> a+b) 
  }
  Array.prototype.even = function() {
    return this.filter(x => x % 2 == 0)
  }
  Array.prototype.odd = function() {
    return this.filter(x => x%2 == 1)
  }