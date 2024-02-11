import { Node } from "../../4_nodes_list/2/linkedList/linkedList.solution.js"

/**
 * Deletes an n-th element from the given head.
 *
 * @param {Node} head - the head of the list
 * @param {number} n - a positive integer representing the index of the element to be deleted (starting from 0)
 * @throws {Error} if the given index is out of range
 * @return {Node} the updated head
 * @example
 * deleteElement([1, 2, 3, 4, 5], 2) => [1, 2, 4, 5]
 */
export function deleteElement(head, n) {
	if (n < 0) {
		throw new Error("Index out of range")
	}

	const result = new Node(0, head)
	let node = result

	while (n > 0) {
		node = node.next
		if (node.next === null) {
			throw new Error("Index out of range")
		}
		n--
	}

	node.next = node.next.next

	return result.next
}

export function deleteElement2(head, n) {
	const result = new Node(0, head)

	function recursiveDelete(head, n) {
		if (n < 0) {
			throw new Error("Index out of range")
		}

		if (head.next === null && n >= 0) {
			throw new Error("Index out of range")
		}

		if (head === null) {
			return head
		}

		if (n === 0) {
			head.next = head.next.next
			return head
		}

		recursiveDelete(head.next, n - 1)
		return head
	}

	recursiveDelete(result, n)

	return result.next
}
