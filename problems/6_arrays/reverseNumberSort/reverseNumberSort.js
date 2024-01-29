/**
 * Sorts an array of numbers in descending order.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @return {number[]} - The sorted array in descending order.
 * @example
 * reverseNumberSort([5, 4, 3, 2, 1, 6, 7, 8, 9]); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
 * reverseNumberSort([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */
export function reverseNumberSort(arr) {
	if (arr === []) {
		return []
	} else {
		return arr.sort().reverse()
	}
	
}
