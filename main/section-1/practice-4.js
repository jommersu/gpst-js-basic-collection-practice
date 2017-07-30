'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var col = [];
    for(let i = 0; i < collectionA.length; i++){
        for(let j = 0; j < collectionB.value.length; j++){
            if(collectionA[i].key == collectionB.value[j]){
                col.push(collectionA[i].key);
            }
            else{
            continue;
            }
         }      
    } 
  return col;
}
