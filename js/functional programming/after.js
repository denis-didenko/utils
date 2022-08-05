'use strict';

// After

// es5
function after(count, fn) {
    var execCount = 0;

    return function() {
        execCount++;
        if(execCount >= count) {
            fn.apply(this, arguments);
        }
    }
}


// es6
function after(count, fn) {
    let execCount = 0;

    return (...args) => {
        execCount++;
        if(execCount >= count) {
            return fn(...args);
        }
    }
}