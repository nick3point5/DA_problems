/**
 * Creates a Node data structure.
 *
 * @class
 * @property {number} value - The value of the Node.
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
	 * @param {number} value - The value of the constructor.
	 * @param {Node<T> | null} prev - The previous Node of the constructor defaults to null.
	 * @param {Node<T> | null} next - The next Node of the constructor defaults to null.
	 */
	constructor() {
	}
}

/**
 * Creates a DoubleEndedQueue data structure without arrays.
 *
 * @class
 * @property {Node<T> | null} head - The head of the DoubleEndedQueue.
 * @property {Node<T> | null} tail - The tail of the DoubleEndedQueue.
 */
export class DoubleEndedQueue<T> {
	constructor() {
	}

	/**
	 * Removes and returns the value at the front of the dequeue.
	 *
	 * @return {T | nul} The value at the front of the dequeue, or null if the queue is empty.
	 */
	shift() {
	}

	/**
	 * Adds a new value to the beginning of the dequeue.
	 *
	 * @param {T} value - The value to be added to the dequeue.
	 */
	unshift() {
	}

	/**
	 * Adds a new value to the end of the dequeue.
	 *
	 * @param {T} value - The value to be added to the dequeue.
	 */
	push() {
	}
	/**
	 * Pops the last value from the dequeue.
	 *
	 * @return {T | null} The value that was popped from the dequeue. Returns null if the dequeue is empty.
	 */
	pop() {
	}
}
