/**
 * Checks if an array has any duplicate values.
 *
 * @param {number[]} array - The array to be checked for duplicates.
 * @return {boolean} Returns true if the array has duplicate values, false otherwise.
 * @example
 * hasDuplicate([1, 2, 3, 4, 5]); // false
 * hasDuplicate([1, 2, 3, 4, 5, 2]); // true
 */
export function hasDuplicate(array) {
	let testArray = []
	for (let i = 0; i < array.length; i++) { 
		if (testArray.indexOf(array[i]) !== -1) {
			return true
		}
		testArray.push(array[i])
	}

	return false
}
