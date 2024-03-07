/**
 * Find the maximum value in a given n-dimensional array.
 *
 * @param {number[]} array - The n-dimensional array to search.
 * @return {number} - Returns the maximum value in the array. Returns null if the array is empty..
 */
export function findMaxND(arr) {
	let flat = arr.flat()
	if (flat.length === 0) {
		return null

	} else {
		return Math.max(...flat)


	}
}

