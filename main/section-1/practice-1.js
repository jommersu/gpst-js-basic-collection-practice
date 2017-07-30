'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var col = [];
    for(let i = 0; i < collectionA.length; i++ ){
        for(let j = 0; j < collectionB.length; j++){
            if (collectionA[i] == collectionB[j]){
                col.push(collectionA[i]);
            }
            else{
                continue;
            }
        }
    }
  return col;
}
