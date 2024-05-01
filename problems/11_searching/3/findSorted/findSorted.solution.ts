/**
 * Finds the index of the target element in a sorted array using binary search.
 *
 * @param {number[]} array - The sorted array to search in.
 * @param {number} target - The element to find in the array.
 * @return {number} The index of the target element in the array, or -1 if it is not found.
 * @example
 * findSorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => 2
 * findSorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 0) => -1
 * findSorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 7) => 6
 */
export function findSorted(array: number[], target: number) {
	let left = 0
	let right = array.length

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2)
		if (array[mid] === target) {
			return mid
		} else if (array[mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return -1
}

export function findSorted2(array: number[], target: number) {
	function search(array: number[], target: number, left: number, right: number) {
		if (left > right) {
			return -1
		}
		const mid = left + ((right - left) >> 1)
		if (array[mid] === target) {
			return mid
		} else if (array[mid] < target) {
			return search(array, target, mid + 1, right)
		} else {
			return search(array, target, left, mid - 1)
		}
	}

	return search(array, target, 0, array.length - 1)
}
