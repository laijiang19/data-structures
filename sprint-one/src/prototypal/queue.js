var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.eCnt = 0;
  someInstance.dCnt = 0;

  return someInstance;

};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.eCnt] = value;
    this.eCnt++;

  },
  dequeue : function(){
    if(this.eCnt - this.dCnt > 0){
      
      var holder = this.storage[this.dCnt];
      delete this.storage[this.dCnt];
      this.dCnt++;
      return holder;
    }

  },
  size: function(){
    return this.eCnt - this.dCnt;
  }
};


