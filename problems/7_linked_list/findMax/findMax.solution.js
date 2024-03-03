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
	let max = -Infinity

	while (head) {
		if (head.value > max) {
			max = head.value
		}
		head = head.next
	}

	if (max === -Infinity) {
		return null
	}

	return max
}

export function findMax2(head) {
	function search(node, max) {
		if (node === null) {
			return max
		}
		if (node.value > max || max === null) {
			max = node.value
		}
		return search(node.next, max)
	}
	return search(head, null)
}
