/**
 * Finds the index of the target first element in the array.
 *
 * @param {number[]} array - The array to search in.
 * @param {number} target - The target element to find.
 * @return {number} The index of the target element in the array, or -1 if not found.
 */
export function findUnsorted(array: number[], target: number): number {
	let returnVal = -1

	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			returnVal = i
			break
		}
	}

	return returnVal
}
