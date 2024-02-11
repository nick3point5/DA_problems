/**
 * Rotates the elements of an array by a given number of positions.
 *
 * @param {number[]} array - The array to be rotated.
 * @param {number} n - The number of positions to rotate the array.
 * @return {number[]} - The rotated array.
 * @example
 * rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
 * rotate([1, 2, 3, 4, 5], 3); // [3, 4, 5, 1, 2]
 * rotate([1, 2, 3, 4, 5], 5); // [1, 2, 3, 4, 5]
 */
export function rotate(arr,n) {
	if (arr.length === 0) {
		return arr
	} else {

		for (let i = 0; i < n; i++) {
			const popped = arr.pop()

			arr.unshift(popped)
		}
		return arr
	}
}
