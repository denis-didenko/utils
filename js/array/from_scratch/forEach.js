const arr = [1, 2, 3, 4];

Array.prototype.forEach2 = function (callback) {
	if (typeof callback !== 'function') {
		throw new Error('Callback is not a function');
	}
	// 'this' refers to the array
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};

arr.forEach2((item) => {
	console.log(item);
});
