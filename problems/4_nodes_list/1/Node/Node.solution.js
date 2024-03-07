/**
 * Creates a Node data structure.
 *
 * @class
 * @property {number} value - The value of the Node.
 * @property {Node | null} next - The next Node of the Node.
 */
export class Node {
	/**
	 * Initializes a new instance of the constructor.
	 *
	 * @param {number} value - The value of the constructor.
	 * @param {Node | null} next - The next Node of the constructor defaults to null.
	 */
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
