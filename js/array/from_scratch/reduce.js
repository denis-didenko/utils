const arr = [1, 2, 3, 4];

Array.prototype.reduce2 = function (callback, accumulator) {
	if (typeof callback !== 'function') {
		throw new Error('Callback is not a function');
	}

	// 'this' refers to the array
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i]);
	}

	return accumulator;
};

arr.reduce2((item) => {
	console.log(item);
});
