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


const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
