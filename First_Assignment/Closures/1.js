//Create Hello World Function

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

const f = createHelloWorld()
f()
// console.log(f())