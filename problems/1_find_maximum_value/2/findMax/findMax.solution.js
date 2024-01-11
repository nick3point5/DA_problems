/**
 * Finds the maximum value in an array.
 *
 * @param {number[]} array - The array of numbers to search for the maximum value.
 * @return {number} Returns the maximum value in the array. Returns null if the array is empty.
 */
export function findMax(array) {
	if (array.length === 0) {
		return null
	}

	let max = -Infinity
	for (let i = 0; i < array.length; i++) {
		const value = array[i]
		if (value > max) {
			max = value
		}
	}

	return max
}

export function findMax2(array) {
	if (array === null) {
		return null
	}

	function recursion(array, max) {
		if (array.length === 0) {
			return max
		}

		return recursion(array.slice(1), Math.max(max, array[0]))
	}

	return recursion(array, null)
}

export function findMax3(array) {
	if (array.length === 0) {
		return null
	}
	return Math.max(...array)
}

export function findMax4(array) {
	if (array.length === 0) {
		return null
	}
	return array.reduce((a, b) => Math.max(a, b))
}
