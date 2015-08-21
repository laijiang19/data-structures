var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  _.extend(newTree,treeMethods);
  newTree.children = [];

  return newTree;
};


var treeMethods = {};


treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
};


treeMethods.contains = function(target){
  var found = false; 
  
  if(this.value === target){
    return true;
  }

  for (var i=0; i<this.children.length; i++){
    found = this.children[i].contains(target) || found;
  }
  
  return  found; 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */