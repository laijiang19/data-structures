var Stack = function() {
  
  var someInstance = {
    _storage : {},
    _count : 0
  }; 

  _.extend(someInstance,stackMethods);

  return someInstance; 
};

var stackMethods = {
  push : function(value){
    this._storage[this._count] = value;
    this._count++;
  },
  pop : function(){
    if (this._count > 0){
      this._count--;
    }
    var holder = this._storage[this._count];
    delete this._storage[this._count];
    return holder;
  },
  size : function(){
    return this._count;
  }
};


