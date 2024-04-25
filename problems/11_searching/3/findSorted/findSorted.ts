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
export function findSorted(array: number[], target: number): number {
	let left = 0
    let right = array.length - 1

	while (left <= right) {
        const middleIndex = Math.floor((left + right)/2)
			
        if (array[middleIndex] === target) {
            return middleIndex
        } else if (target < array[middleIndex]) {
            right = middleIndex - 1
        } else {
            left = middleIndex + 1
        }
    }

    return -1 //the element doesnt exist
}
