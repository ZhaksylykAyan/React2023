//Apply Transform Over Each Element in Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let a = [];
    for(i = 0; i < arr.length; i++){
        a[i] = fn(arr[i], i);
    }
    return a;
};

