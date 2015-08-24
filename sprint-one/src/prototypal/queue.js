var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    this._storage[this._end] = value;
    this._end++;

  },
  dequeue : function(){
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


