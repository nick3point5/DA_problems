/**
 * Finds the index of the target first element in the array.
 *
 * @param {number[]} array - The array to search in.
 * @param {number} target - The target element to find.
 * @return {number} The index of the target element in the array, or -1 if not found.
 * @example
 * findUnsorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => 2
 * findUnsorted([7, 3, 8, 2, 6, 5, 1, 4, 9], 9) => 8
 * findUnsorted([7, 3, 8, 2, 6, 5, 1, 4, 9], 4) => 7
 * findUnsorted([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 6) => 7
 */
export function findUnsorted(array: number[], target: number) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i]
		if (element === target) {
			return i
		}
	}

	return -1
}

export function findUnsorted2(array: number[], target: number) {
	return array.indexOf(target)
}

export function findUnsorted3(array: number[], target: number) {
	function search(array: number[], target: number, i: number) {
		if (i === -1) return -1
		if (array[0] === target) return i
		if (array.length === 0) return -1
		return search(array.slice(1), target, i + 1)
	}

	return search(array, target, 0)
}
