'use strict';

module.exports = function countSameElements(collection) {
    var col = [];
    var count = 1;
    var k = 0;
    for(let i = 0; i < collection.length; i++){
        if(collection[i] == collection[i + 1]){
            count ++;
        }
        else{
            var obj = {key: collection[i] , count:count};
            col[k] = obj;
            count = 1;
            k ++;
        }
   
    }
    
    var last = collection.pop();
    obj = {key : last.split("-")[0], count : parseInt(last.split("-")[1]) };
    col[k - 1] = obj;
    return col;
    
}
