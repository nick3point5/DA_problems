import { Node } from "../../4_nodes_list/2/linkedList/linkedList.js"

/**
 * Finds the maximum value in a linked list.
 *
 * @param {Node} head - the head of the linked list
 * @return {number} the maximum value in the linked list or null if the list is empty
 * @example
 * findMax([1, 2, 3, 4, 5]) => 5
 * findMax([]) => null
 * findMax([5, 8, 9, 3, 2, 6, 7, 1, 4]) => 9
 */
export function findMax(head) {
	if (head === null) {
		return null
	}

	let max = 0
	
	while (head !== null) {
		if (head.value > max) {
			max = head.value
		}
		head = head.next
	}

	return max
}
