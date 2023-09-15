//Allow One Function Call
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let ok = true;
    let ans = 0;
    return function(...args){
        if(ok){
            ans = fn(...args);
            ok = false;
            return ans;
        }else return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
