/**
 * Finds the maximum value in a 2D array.
 *
 * @param {number[][]} array - The 2D array to search.
 * @return {number} - Returns the maximum value in the array. Returns null if the array is empty..
 */
export function findMax2D(array) {
	if (array.length === 0) {
		return null
	}

	let max = null

	for (let i = 0; i < array.length; i++) {
		const row = array[i]
		for (let j = 0; j < row.length; j++) {
			const value = row[j]
			if (value > max || max === null) {
				max = value
			}
		}
	}

	return max
}

export function findMax2D2(array) {
	return array.flat().reduce((a, b) => Math.max(a, b), null)
}

export function findMax2D3(array) {
	return Math.max(...array.flat())
}

export function findMax2D4(array) {
	function findMax(a, b) {
		if (a === null && b !== null) return b
		if (a !== null && b === null) return a
		return a > b ? a : b
	}

	function recursion(array, max) {
		if (array.length === 0) {
			return max
		}

		if (Array.isArray(array[0])) {
			return recursion(array.slice(1), findMax(max, recursion(array[0], max)))
		}

		return recursion(array.slice(1), findMax(max, array[0]))
	}

	return recursion(array, null)
}
