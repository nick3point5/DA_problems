/**
 * Doubles each element in the given array.
 *
 * @param {Array} array - The array to be doubled.
 * @return {Array} The array with each element doubled.
 */
export function double(array) {
	return array.map((x) => x * 2)
}

export function double2(array) {
	const result = []
	array.forEach((element) => {
		result.push(element * 2)
	})
	return result
}

export function double3(array) {
	const result = []
	for (let i = 0; i < array.length; i++) {
		const element = array[i]
		result[i] = element * 2
	}

	return result
}
