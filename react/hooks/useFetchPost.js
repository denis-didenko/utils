import { useEffect, useState } from 'react';

const getPostOptions = data => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
};

export const useFetchPost = (url, formData) => {
	const [immediate, setImmediate] = useState(false);
	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const options = getPostOptions(formData);

	useEffect(() => {
		setLoading(true);

		immediate &&
			fetch(url, options)
				.then(response => response.json())
				.then(setData)
				.catch(setError)
				.finally(() => setLoading(false));

		setImmediate(false);
	}, [url, immediate]);

	return { data, error, loading, setImmediate };
};
