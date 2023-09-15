/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let a = [];
    for (i = 0; i < arr.length; i += size){
        a.push(arr.slice(i, i + size));
    }
    return a;
};

// arr = [1, 9, 6, 3, 2];
// size = 3;
// console.log(chunk(arr, size));