/**
 * Creates a Node data structure.
 *
 * @class
 * @property {T} value - The value of the Node.
 * @property {Node<T> | null} prev - The previous Node of the Node.
 * @property {Node<T> | null} next - The next Node of the Node.
 */
export class Node<T> {
	value: T
	prev: Node<T> | null
	next: Node<T> | null
	/**
	 * Initializes a new instance of the constructor.
	 *
	 * @param {T} value - The value of the constructor.
	 * @param {Node<T> | null} prev - The previous Node of the constructor defaults to null.
	 * @param {Node<T> | null} next - The next Node of the constructor defaults to null.
	 */
	constructor() {
	}
}

/**
 * Creates a doubly linked list from an array of values.
 *
 * @param {number[]} array - The array of values to create the linked list from.
 * @return {Node} - The head node of the created doubly linked list.
 */
export function doublyLinkedList(array: number[]) {
	return null
}
