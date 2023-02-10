const Queue = function() {
    this.queue = [];
    this.headTracker = 0;
    this.tailTracker = 0;
  }
  Queue.prototype.enqueue = function(item) {
    this.queue[this.tailTracker++] = item;
  };
  
  Queue.prototype.dequeue = function() {
    // remove item from the front of the queue and return its value
    let answer;
    if (this.size()) {
     answer = this.queue[this.headTracker++]
      
    }
    return answer;
  };
  
  Queue.prototype.size = function() {
    return this.tailTracker - this.headTracker;
  };