var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage ={};
  this.cnt = 0;
};

Stack.prototype.push = function(value){
    this.storage[this.cnt] = value;
    this.cnt++;
};

Stack.prototype.pop = function(){
  if(this.cnt > 0){
    this.cnt--;
    var holder = this.storage[this.cnt];
    delete this.storage[this.cnt];
    return holder;
  }
};

Stack.prototype.size = function(){
    return this.cnt;
};

var newStack = new Stack();



