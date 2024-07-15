import { Node } from "../../../4_nodes_list/1/Node/Node.ts"
import { linkedList } from "../../../4_nodes_list/2/linkedList/linkedList.js"

/**
 * Draws a linked list as a string representation.
 *
 * @param {Node<number> | null} head - The head of the linked list.
 * @return {string} The string representation of the linked list.
 * @example
 * drawLinkedList([]) => "null"
 * drawLinkedList([1]) =>
 * """
 * 1
 * |
 * v
 * null
 * """
 * drawLinkedList([1, 2, 3]) =>
 * """
 * 1
 * |
 * v
 * 2
 * |
 * v
 * 3
 * |
 * v
 * null
 * """
 * drawLinkedList([1, 2, 3, 4, 5]) =>
 * """
 * 1
 * |
 * v
 * 2
 * |
 * v
 * 3
 * |
 * v
 * 4
 * |
 * v
 * 5
 * |
 * v
 * null
 * """
 */
export function drawVerticalLinkedList(head: Node<number> | null): string {
	let stringList: string = ""

	while (head != null) {
		stringList += head.value.toString()
		stringList += "\r\n"
		stringList += "|"
		stringList += "\r\n"
		stringList += "v"
		stringList += "\r\n"

		head = head.next
	}

	stringList += "null"

	return stringList
}
