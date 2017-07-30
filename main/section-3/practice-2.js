'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for (let i = 0; i < collectionA.length; i++) {
  		for (let j = 0; j < objectB.value.length; j++) {
  			if( collectionA[i].key == objectB.value[j]){
  			    var a = collectionA[i].count
  				collectionA[i].count -= (a - (a % 3)) / 3;
  			}
  		}
  }
  return collectionA;
}
