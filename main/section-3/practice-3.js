'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = [];
    var count = 1;
    var k = 0;
    
    for(let i = 0; i < collectionA.length; i++){
        if(collectionA[i] == collectionA[i + 1]){
            count ++;            
        }
        else{
            var obj = {key: collectionA[i], count: count};
            collectionC[k] = obj;
            count = 1;
            k ++;
        }             
    }
    for (let i = 0; i < collectionC.length; i++) {
  		for (let j = 0; j < objectB.value.length; j++) {
  			if( collectionC[i].key == objectB.value[j]){
  			    var a = collectionC[i].count
  				collectionC[i].count -= (a - (a % 3)) / 3;
  			}
  		}
  }
    
    
  return collectionC;
}
