import { Node } from "../../4_nodes_list/2/linkedList/linkedList.js"

/**
 * Finds the middle node of a linked list.
 *
 * @param {Node} head - The head of the linked list.
 * @return {Node} The middle node of the linked list or null if the list is empty. (If the list has an even number of nodes, return the right most, tail end, node that is in the middle of the list.)
 * @example
 * findMiddle([1, 2, 3, 4, 5]) => 3
 * findMiddle([]) => null
 * findMiddle([1, 2, 3, 4, 5, 6]) => 4
 */
export function findMiddle(head) {
	if (head === null) {
		return null
	}

	let slow = head
	let fast = head

	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	return slow
}

export function findMiddle2(head) {
	if (head === null) {
		return null
	}

	function search(slow, fast) {
		if (fast === null || fast.next === null) {
			return slow
		}

		return search(slow.next, fast.next.next)
	}

	return search(head, head)
}
