import { useState } from 'react';

/* This will be a custom hook built *around* useState.

   We're going to change a stateful variable, *but also*
   read/write changes from/to persisted session storage.

   This is why we're using a custom hook in the first place -- 
   we want to work with state, but also do related i/o with
   an external system.
*/
export function useSelectedResource() {

	const [selectedResource, setSelectedResource] = useState(
		null // We are going update this initial value so it reads from persistent storage.
	);

	function updateSelectedResource(resource) {
		// 1. change the value in React state via setter
		setSelectedResource(resource);
		// 2. also write the value to persistent storage
		// ...
	}

	return [selectedResource, updateSelectedResource]
}
