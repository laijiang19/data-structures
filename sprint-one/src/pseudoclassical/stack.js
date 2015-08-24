var Stack = function() {

  this._storage ={};
  this._cnt = 0;

};

Stack.prototype.push = function(value){
    this._storage[this._cnt] = value;
    this._cnt++;
};

Stack.prototype.pop = function(){
  if(this._cnt > 0){
    this._cnt--;
    var holder = this._storage[this._cnt];
    delete this._storage[this._cnt];
    return holder;
  }
};

Stack.prototype.size = function(){
    return this._cnt;
};

//to instantiate, use keyword 'new'
var newStack = new Stack();



