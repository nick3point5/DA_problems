/**
 * Checks if an array has any duplicate values.
 *
 * @param {Array} array - The array to be checked for duplicates.
 * @return {boolean} Returns true if the array has duplicate values, false otherwise.
 */
export function hasDuplicate(array) {
	const set = new Set(array)
	return set.size !== array.length
}

export function hasDuplicate2(array) {
	const map = new Map()
	for (let i = 0; i < array.length; i++) {
		const value = array[i]

		if (map.has(value)) {
			return true
		}

		map.set(value, null)
	}
	return false
}

export function hasDuplicate3(array) {
	const map = {}
	for (let i = 0; i < array.length; i++) {
		const value = array[i]

		if (map[value]) {
			return true
		}

		map[value] = true
	}
	return false
}
