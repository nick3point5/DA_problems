import { Node } from "../../4_nodes_list/2/linkedList/linkedList.solution.js"

/**
 * Reverses the order of a linked list.
 *
 * @param {Node} head - The head of the linked list.
 * @return {Node} The new head of the reversed linked list.
 * @example
 * reverseList([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
 * reverseList([]) => []
 * reverseList([1, 2, 3, 4, 5, 6]) => [6, 5, 4, 3, 2, 1]
 */
export function reverseList(head) {
	let previous = null
	while (head !== null) {
		const current = head.next
		head.next = previous
		previous = head
		head = current
	}

	return previous
}

export function reverseList2(head) {
	function recursiveReverse(head, previous = null) {
		if (head === null) return previous

		let node = recursiveReverse(head.next, head)
		if (node === head) {
			node.next = previous
		} else {
			head.next = previous
		}
		return node
	}

	return recursiveReverse(head)
}
