import { Node } from "../../4_nodes_list/2/linkedList/linkedList.js"

/**
 * Calculates the length of a linked list.
 *
 * @param {Node} head - The head of the linked list.
 * @return {number} The length of the linked list.
 * @example
 * findLength([1, 2, 3, 4, 5]) => 5
 */
export function findLength(head) {
	let length = 0
	while (head) {
		length++
		head = head.next
	}
	return length
}

export function findLength2(head) {
	function count(head, n) {
		if (head === null) return n
		return count(head.next, n + 1)
	}

	return count(head, 0)
}
