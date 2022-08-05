const arr = [1, 2, 3, 4];

Array.prototype.map2 = function (callback) {
	if (typeof callback !== 'function') {
		throw new Error('Callback is not a function');
	}

	const mapped = [];

	// 'this' refers to the array
	for (let i = 0; i < this.length; i++) {
		mapped[i] = callback(this[i], i, this);
	}

	return mapped;
};

arr.map2((item) => {
	console.log(item);
});
