/**
 * Rotates the elements of an array by a given number of positions.
 *
 * @param {Array} array - The array to be rotated.
 * @param {number} n - The number of positions to rotate the array.
 * @return {Array} - The rotated array.
 * @example
 * rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
 * rotate([1, 2, 3, 4, 5], 3); // [3, 4, 5, 1, 2]
 * rotate([1, 2, 3, 4, 5], 5); // [1, 2, 3, 4, 5]
 */
export function rotate(array, n) {
	pivot = n % array.length

	for (let i = 0; i < pivot; i++) {
		const temp = array.pop()
		array.unshift(temp)
	}

	return array
}

export function rotate2(array, n) {
	const pivot = array.length - n % array.length
	return array.slice(pivot).concat(array.slice(0, pivot))
}

export function rotate3(array, n) {
	const pivot = array.length - n % array.length
	return [...array.splice(pivot, array.length), ...array]
}

export function rotate4(array, n) {
	const pivot = n%array.length
	array.unshift(...array.splice(-pivot))
	return array
}