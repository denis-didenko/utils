const numbers = [1, 2, 3, 4, 5, 4, 2, 6];

function unique(arr) {
	return [...new Set(arr)];
}

function unique2(arr) {
	return arr.filter((item, index, array) => {
		return index === array.indexOf(item);
	});
}

function unique3(arr) {
	return arr.reduce((uniq, item) => {
		return uniq.includes(item) ? uniq : [...uniq, item];
	}, []);
}

console.log(unique3(numbers));
