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
 * Creates a queue data structure without arrays.
 *
 * @class
 * @property {Node} head - The head of the queue.
 * @property {Node} tail - The tail of the queue.
 */
export class Queue {
	constructor() {
		this.head = null
		this.tail = null
	}

	/**
	 * Enqueues a value to the end of the queue.
	 *
	 * @param {type} value - The value to be enqueued
	 * @returns {void}
	 */
	enqueue(value) {
		const node = new Node(value)
		if (this.head === null) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
	}

	/**
	 * Removes and returns the value at the front of the queue.
	 *
	 * @return {number} The value at the front of the queue, or null if the queue is empty.
	 */
	dequeue() {
		if (this.head === null) {
			return null
		}

		const value = this.head.value
		this.head = this.head.next
		return value
	}
}
