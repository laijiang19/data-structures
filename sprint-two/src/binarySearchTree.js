var BinarySearchTree = function(value){
  var bst = {};

  bst.left = undefined;
  bst.right = undefined;
  bst.value = value;

  bst.insert = function(value){
    var current = bst;
    var parent;

    while (current !== undefined){
      parent = current;
      if (value > current.value){
        current = current.right;
      }
      else {
        current = current.left;
      }
    }

    if(value > parent.value){
      parent.right = BinarySearchTree(value);

    }else{
      parent.left = BinarySearchTree(value);
    }
    
  };


  bst.contains = function(value){
    var found = false;
    bst.depthFirstLog(function(bstVal){
      if(bstVal === value){
        found = true;
      }
    });
    return found;
  };


  bst.depthFirstLog = function(cb){
    cb(bst.value);
    if(bst.left !== undefined){
      bst.left.depthFirstLog(cb);
    }
    if(bst.right !== undefined){
      bst.right.depthFirstLog(cb); 
    }


  };

  return bst;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
