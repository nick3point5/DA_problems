/**
 * Creates a Node data structure.
 *
 * @class
 * @property {number} value - The value of the Node.
 * @property {Node} next - The next Node of the Node.
 */
export class Node {
	/**
	 * Initializes a new instance of the constructor.
	 *
	 * @param {number} value - The value of the constructor.
	 * @param {Node} next - The next Node of the constructor defaults to null.
	 */
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
/**
 * Creates a stack data structure.
 *
 * @class
 * @returns {Stack}
 * @property {Node} head - The head of the stack.
 */
export class Stack {
	constructor() {
		this.head = null
	}
	/**
	 * Pushes a new value onto the top of the stack.
	 *
	 * @param {number} value - the value to be pushed onto the stack
	 * @returns {void}
	 */
	push(value) {
		this.head = new Node(value, this.head)
	}
	/**
	 * Pops the top element from the stack and returns it.
	 *
	 * @return {number} The value of the element popped from the stack, or null if the stack is empty.
	 */
	pop() {
		if (this.head === null) return null
		const value = this.head.value
		this.head = this.head.next
		return value
	}
}
