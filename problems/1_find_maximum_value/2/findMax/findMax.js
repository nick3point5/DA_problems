/**
 * Finds the maximum value in an array.
 *
 * @param {number[]} array - The array of numbers to search for the maximum value.
 * @return {number} Returns the maximum value in the array. Returns null if the array is empty.
 */
export function findMax(array) {
	var highestNumber = 0
	if (array.length == 0) {
		return null
	} else {
		return Math.max(...array)
	}
	
}
