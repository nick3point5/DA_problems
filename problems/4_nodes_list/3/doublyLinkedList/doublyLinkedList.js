/**
 * Creates a Node data structure.
 *
 * @class
 * @property {number} value - The value of the Node.
 * @property {Node} prev - The previous Node of the Node.
 * @property {Node} next - The next Node of the Node.
 */
export class Node {
	/**
	 * Initializes a new instance of the constructor.
	 *
	 * @param {number} value - The value of the constructor.
	 * @param {Node} prev - The previous Node of the constructor defaults to null.
	 * @param {Node} next - The next Node of the constructor defaults to null.
	 */
	constructor(value, next = null, prev = null) {
		this.value = value
		this.next = next
		this.prev = prev
	}
}

/**
 * Creates a doubly linked list from an array of values.
 *
 * @param {Array} array - The array of values to create the linked list from.
 * @return {Node} - The head node of the created doubly linked list.
 */
export function doublyLinkedList(array) {
	return null
}
