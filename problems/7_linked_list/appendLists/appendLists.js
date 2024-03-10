import { Node, linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"

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
	if (list1 === null) {
		if (list2 === null) {
			return list1
		} else {
			return list2
		}
	}
	let returnList = list1
	while (list1.next !== null) {
		list1 = list1.next
	}

	list1.next = list2
	return returnList
}
