
var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance =  {
    storage : {},
    enqueueCnt : 0,
    dequeueCnt : 0
  };

  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.enqueueCnt] = value;
    this.enqueueCnt++;
  },
  dequeue: function(){
    if(this.enqueueCnt - this.dequeueCnt > 0){
      var holder = this.storage[this.dequeueCnt];
      delete this.storage[this.dequeueCnt];
      this.dequeueCnt++;
      return holder;
    }
  },
  size: function(){  
    return this.enqueueCnt - this.dequeueCnt;
  }
};


