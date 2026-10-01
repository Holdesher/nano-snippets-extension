import { useEffect } from 'react';

export const Example = ({ value }) => {
	useEffect(() => {
		console.log('value:', value);
	}, [value]);

	return <p>{value}</p>;
};
