const arr = [1, 2, 3, 4];

Array.prototype.filter2 = function (callback) {
	if (typeof callback !== 'function') {
		throw new Error('Callback is not a function');
	}

	const filtered = [];

	// 'this' refers to the array
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			filtered.push(this[i]);
		}
	}

	return filtered;
};

arr.filter2((item) => {
	console.log(item);
});
