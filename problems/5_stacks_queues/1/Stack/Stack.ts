import { Node } from "../../../4_nodes_list/1/Node/Node.ts"

/**
 * Creates a stack data structure without arrays.
 *
 * @class
 * @returns {Stack}
 * @property {Node | null} head - The head of the stack.
 */
export class Stack<T> {
	head: Node<T> | null
	constructor() {
	}
	/**
	 * Pushes a new value onto the top of the stack.
	 *
	 * @param {T} value - the value to be pushed onto the stack
	 * @returns {void}
	 */
	push(value: T) {
	}
	/**
	 * Pops the top element from the stack and returns it.
	 *
	 * @return {T | null} The value of the element popped from the stack, or null if the stack is empty.
	 */
	pop() {
	}
}
