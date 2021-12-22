function debounce(f, ms) {
	let isReady = false;

	let wrapper = function () {
		if (isReady) return;

		f.apply(this, arguments);
		isReady = true;

		setTimeout(function () {
			isReady = false;
		}, ms);
	};

	return wrapper;
}
