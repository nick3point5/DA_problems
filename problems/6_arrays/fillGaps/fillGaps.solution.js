/**
 * Fills the gaps in an array by inserting missing elements between consecutive elements.
 *
 * @param {Array} array - The array to fill the gaps in.
 * @return {Array} - The modified array with the gaps filled.
 */
export function fillGaps(array) {
	if (array.length === 0) {
		return array
	}

	let previous = array[0]
	for (let i = 1; i < array.length; i++) {
		const current = array[i]

		if (current !== previous + 1) {
			array.splice(i, 0, previous + 1)
			previous = previous + 1
		} else {
			previous = current
		}
	}

	return array
}
