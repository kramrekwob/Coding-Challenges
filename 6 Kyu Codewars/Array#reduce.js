Array.prototype.reduce = function(process, initial) {
    //edge cases for empty array, or just an initial value
    if (this.length === 0 && initial) return initial;
    if (this.length === 1 && !initial) return this[0];

    let previousValue;
    let accumulator;
    
    if ( initial ) { previousValue=initial }
    else { previousValue = this[0] };
    
    for ( let i=0; i < this.length; i++ ) {
      
      if ( i===0 && !initial ) continue;
      
      accumulator = process(previousValue, this[i]);
      
      previousValue = accumulator;
    }
    return accumulator;
}