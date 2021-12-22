const compose = (...functions) => {
	return (initialValue) => functions.reduceRight((result, func) => func(result), initialValue);
};
