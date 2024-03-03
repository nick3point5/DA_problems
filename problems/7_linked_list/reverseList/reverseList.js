import { Node } from "../../4_nodes_list/2/linkedList/linkedList.js"

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
	if (head === null) {
		return head
	}

	let valueArray = []
	let counter = 0

	while (head !== null) {
		valueArray[counter] = head.value
		head = head.next
		counter++
	}
	
	valueArray.reverse()

	let newList = new Node(valueArray[0])
	let returnList = newList

	for (let i = 1; i < valueArray.length; i++) {
		newList.next = new Node(valueArray[i])
		newList = newList.next
	}

	return returnList
}