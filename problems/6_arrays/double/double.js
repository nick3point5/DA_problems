/**
 * Doubles each element in the given array.
 *
 * @param {number[]} array - The array to be doubled.
 * @return {number[]} The array with each element doubled.
 * @example
 * double([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [2, 4, 6, 8, 10, 12, 14, 16, 18]
 */
export function double(arr) {
	let doubledArray = []
	for (let i = 0; i < arr.length; i++) {
		doubledArray[i] = arr[i] * 2
		console.log(doubledArray[i])
	}
	return doubledArray
}
