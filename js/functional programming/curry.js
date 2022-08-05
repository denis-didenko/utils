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

function curry(fn) {
	return function curried(...args) {
		if (args.length < fn.length) {
			return function (...next) {
				return curried(...args, ...next);
			};
		}

		return fn(...args);
	};
}
