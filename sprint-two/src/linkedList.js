var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){ 
    var node = new Node(value);

    if (list.head === null){
      list.head = node;
    } else {
      var currentTail = list.tail;
      currentTail.next = node; 
    } 
    list.tail = node;
  };


  list.removeHead = function(){
    var oldhead = list.head;
    list.head = oldhead.next;

    return oldhead.value;
  };


  list.contains = function(target){
    var current = list.head;
    while (current !== null){
      if (target === current.value){
        return true;
      }
      current = current.next;
    }
    return false;
  };
  
  
  return list;
};


var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() O(1); removeHead() O(1); contains() O(n);
 */
