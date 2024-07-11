import { Node } from "../../../4_nodes_list/1/Node/Node.ts"

/**
 * Draws a linked list as a string representation.
 *
 * @param {Node<number> | null} head - The head of the linked list.
 * @return {string} The string representation of the linked list.
 * @example
 * drawLinkedList([]) => "null"
 * drawLinkedList([1]) => "1 -> null"
 * drawLinkedList([1, 2, 3]) => "1 -> 2 -> 3 -> null"
 * drawLinkedList([1, 2, 3, 4, 5]) => "1 -> 2 -> 3 -> 4 -> 5 -> null"
 */
export function drawLinkedList(head: Node<number> | null): string {
	let stringList = ""
	
	while (head != null) {
		stringList += head.value.toString()
		stringList += " -> "

		head = head.next
	}

	stringList += "null"

	return stringList
}
