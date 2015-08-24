
var Queue = function(){
  
  var someInstance =  {
    _storage : {},
    _start : 0,
    _end : 0
  };

  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this._storage[this._end] = value;
    this._end++;
  },
  dequeue: function(){
    if(this.size() > 0){
      var holder = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;
      return holder;
    }
  },
  size: function(){  
    return this._end - this._start;
  }
};


