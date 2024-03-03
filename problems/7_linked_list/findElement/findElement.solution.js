import { Node } from "../../4_nodes_list/2/linkedList/linkedList.solution.js"

/**
 * Finds the index of the first occurrence of an element in an list.
 *
 * @param {Node} head - The list to search in.
 * @param {number} element - The element to find.
 * @return {number} - The index of the found element, or -1 if not found.
 * @example
 * findElement([1, 2, 3, 4, 5], 3) => 2
 * findElement([1, 2, 3, 4, 5], 6) => -1
 */
export function findElement(head, element) {
	if (head === null) return -1
	let n = 0
	while (head !== null) {
		if (head.value === element) return n
		head = head.next
		n++
	}
}

export function findElement2(head, element) {
	function recursiveFind(head, element, n) {
		if (head === null) return -1
		if (head.value === element) return n
		return recursiveFind(head.next, element, n + 1)
	}

	return recursiveFind(head, element, 0)
}
