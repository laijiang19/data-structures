
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  //Adds keyval pair to hash table
  var i = getIndexBelowMaxForKey(k, this._limit);
  //value added will be an array  which contains both non hashed key and value pair aka tuple
  var storedBucket = this._storage.get(i);
    
  if(storedBucket !== undefined && storedBucket[0] !== k){
  //use retrieve to check whether position is not undefined 

    //if there is an arrary already within the array
    if(!Array.isArray(storedBucket[0])){
      //push new key value pair within the array
      storedBucket =  [storedBucket];
    }

    storedBucket.push([k,v]);
    this._storage.set(i,storedBucket); 

  }else{
  // if key is undefined  !! key is the same
    // add new tuple to storage array using hashed key
    this._storage.set(i, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storedBucket = this._storage.get(i);
    
  if(Array.isArray(storedBucket[0])){
    for(var j = 0; j < storedBucket.length; j++){
      if(k === storedBucket[j][0]){
        return storedBucket[j][1];
      }
    }
  }
  return storedBucket[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,[null,null]);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // cat : 3  -> i = 0
 // max : 2  -> i = 0 
 // [["cat",3]]
 // storage array position 0: [["cat", 3], ["max",2]]