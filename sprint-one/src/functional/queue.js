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
    if(enqueueCount-dequeueCount > 0){
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

//enqueue("a");  {"0":"a"} count = 1 first = 0
//enqueue("b");  {"0":"a", "1":"b"}  count = 2  first = 0
//dequeue();  {"1":"b"} count = 1 after deleting the current first item, first = 1
//enqueue("c");  we want {"1":"b", "2":"c"} but we are getting {"1":"c"}