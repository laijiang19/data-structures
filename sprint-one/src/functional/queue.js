var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueCount = 0;
  var dequeueCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[enqueueCount] = value;
    enqueueCount++;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() > 0){
      var holder = storage[dequeueCount];
      delete storage[dequeueCount];
      dequeueCount++;
      return holder; 
    }
  };

  someInstance.size = function(){
    return enqueueCount-dequeueCount;
  };

  return someInstance;
};