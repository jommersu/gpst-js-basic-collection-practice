'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var col = [];
    for(let i = 0; i < collectionA.length; i++){
        for(let j = 0; j < objectB.value.length; j++){
            if(collectionA[i] == objectB.value[j]){
                col.push(collectionA[i]);
            }
            else{
            continue;
            }
         }      
    }    
  return col;
}
