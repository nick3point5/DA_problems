import { Node } from "../../4_nodes_list/2/linkedList/linkedList.js"

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
export function deleteElement(head,n) {
	if (n < 0) {
		throw new Error("Index out of range");
	}
	let returnList = new Node(0,head)
	if (n === 0) {
		returnList = returnList.next.next
		return returnList
	}
	for (let i = 0; i+1 === n; i++) {
		head = head.next
	}

	head.next = head.next.next
	
	return returnList.next
}
