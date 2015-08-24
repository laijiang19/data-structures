var Queue = function() {

  this._storage = {};
  this._end = 0;
  this._start = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._end] = value;
  this._end++;
};

Queue.prototype.dequeue = function(){
  if (this.size() > 0){
    var holder = this._storage[this._start];
    delete this._storage[this._start];
    this._start++;
    return holder;
  }
};

Queue.prototype.size = function(){
  return this._end - this._start;
};

//to instantiate, use keyword 'new'
var newQueue = new Queue();
