var Queue = function() {
 this.queue = [];
};

Queue.prototype.enqueue = function(item) {
  return this.queue.unshift(item)
};

Queue.prototype.dequeue = function() {
  // remove item from the front of the queue and return its value
  return this.queue.pop()
};

Queue.prototype.size = function() {
  return this.queue.length;
};