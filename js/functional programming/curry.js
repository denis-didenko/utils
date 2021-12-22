// ES%
function curry(fn) {
	var args = [].slice.call(arguments, 1);

	function curried(fnArgs) {
		if (fnArgs.length >= fn.length) {
			return func.apply(null, fnArgs);
		}

		return function () {
			return curried(fnArgs.concat([].slice.apply(arguments)));
		};
	}

	return curried(args);
}

//ES6
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}
