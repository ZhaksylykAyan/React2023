//Counter
var createCounter = function(n) {
    let count = -1;
    return function() {
        count += 1;
        return n + count;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12