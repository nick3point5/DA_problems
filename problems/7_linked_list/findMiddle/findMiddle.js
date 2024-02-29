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
	let lengthList = head

	if (lengthList === null) {
		return null
	}

	let length = 1

	while (lengthList.next !== null) {
		lengthList = lengthList.next
		length++
	}



	if (length%2 === 0) {
		let repeat = length/2

		while (repeat > 0) {
			head = head.next
			repeat--
		}
		
		return head
	} else {
		let repeat = Math.floor(length/2)

		while (repeat > 0) {
			head = head.next
			repeat--
		}

		return head
	}
}
