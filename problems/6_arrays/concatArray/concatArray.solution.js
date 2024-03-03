/**
 * Concatenates two arrays into a new single array without mutating the original arrays.
 *
 * @param {number[]} array1 - The first array to be concatenated.
 * @param {number[]} array2 - The second array to be concatenated.
 * @return {number[]} The concatenated array.
 */
export function concatArray(array1, array2) {
	return array1.concat(array2)
}

export function concatArray2(array1, array2) {
	return [...array1, ...array2]
}

export function concatArray3(array1, array2) {
	const array = []

	for (let i = 0; i < array1.length; i++) {
		const value = array1[i]
		array.push(value)
	}

	for (let i = 0; i < array2.length; i++) {
		const value = array2[i]
		array.push(value)
	}

	return array
}
