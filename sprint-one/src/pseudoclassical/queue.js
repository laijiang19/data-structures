var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.eCnt = 0;
  this.dCnt = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.eCnt] = value;
  this.eCnt++;
};

Queue.prototype.dequeue = function(){
  if (this.size() > 0){
    var holder = this.storage[this.dCnt];
    delete this.storage[this.dCnt];
    this.dCnt++;
    return holder;
  }
};

Queue.prototype.size = function(){
  return this.eCnt - this.dCnt;
};

var newQueue = new Queue();
