/**
 * Creates a Node data structure.
 *
 * @class
 * @property {T} value - The value of the Node.
 * @property {Node} next - The next Node of the Node.
 */
export class Node<T> {
	value: T
	next: Node<T> | null
	/**
	 * Initializes a new instance of the constructor.
	 *
	 * @param {T} value - The value of the constructor.
	 * @param {Node | null} next - The next Node of the constructor defaults to null.
	 */
	constructor(value: T, next: Node<T> | null = null) {
		this.value = value
		this.next = next
	}
}
