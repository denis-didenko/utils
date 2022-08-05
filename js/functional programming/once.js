'use strict';

// Once

// es5
function once(fn) {
    var hasCalled = true;

    return function() {
        if(hasCalled) {
            hasCalled = false;
            fn.apply(this, arguments);
        }
    }
}


// es6
function once(fn) {
    let hasCalled = true;

    return (...args) => {
        if(hasCalled) {
            hasCalled = false;
            return fn(...args);
        }
    }
}