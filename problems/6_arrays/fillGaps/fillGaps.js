/**
 * Fills the gaps in a sorted array by inserting missing elements between consecutive elements.
 *
 * @param {number[]} array - The array to fill the gaps in.
 * @return {number[]} - The modified array with the gaps filled.
 * @example
 * fillGaps([1, 2, 4, 5, 6]); // [1, 2, 3, 4, 5, 6]
 * fillGaps([1, 5, 6]); // [1, 2, 3, 4, 5, 6]
 */
export function fillGaps(arr) {
	let fullArr = []
	let past = 0
	if (arr == []) {
		return arr
	}
	for (let i = 0; i < arr.length; i++) {
		while ((arr[i] - 1) !== past) {
			fullArr.push(past +1)
			past = past+1
		}
		

		fullArr.push(arr[i])
		past = arr[i]
	}

	return fullArr
}
