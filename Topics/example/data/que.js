function Queue() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
  }
  
  // Add an element to the end of the queue.
  var test1 = function(element) {
    this.queue[this.tail++] = element;
  }
  
  // Delete the first element of the queue.
var test2 = function() {
    if (this.tail === this.head)
        return undefined
  
    var element = this.queue[this.head];
    delete element;
    return element;
  }

 console.log( test1(5));