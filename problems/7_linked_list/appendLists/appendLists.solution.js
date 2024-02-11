import { Node } from "../../4_nodes_list/2/linkedList/linkedList.solution.js"

/**
 * Appends two linked lists together.
 *
 * @param {Node} list1 - The first linked list.
 * @param {Node} list2 - The second linked list.
 * @return {Node} The appended linked list.
 * @example
 * appendLists(
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ) => 1 -> 2 -> 3 -> 4 -> 5 -> 6
 */
export function appendLists(list1, list2) {
	const result = new Node(0, list1)

	let node = result
	while (node.next !== null) {
		node = node.next
	}

	node.next = list2

	return result.next
}

export function appendLists2(list1, list2) {
	const result = new Node(0, list1)

	function recursiveAppend(head, list2) {
		if (head.next === null) {
			head.next = list2
			return head
		}
		return recursiveAppend(head.next, list2)
	}

	recursiveAppend(result, list2)

	return result.next
}
