const flatten = (...input) => {
    return input.reduce((result, current) => {
        return Array.isArray(current) ? result.concat(flatten(...current)) : result.concat(current);
    }, []);
};
