var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() > 0){
      var holder = storage[start];
      delete storage[start];
      start++;
      return holder; 
    }
  };

  someInstance.size = function(){
    return end-start;
  };

  return someInstance;
};