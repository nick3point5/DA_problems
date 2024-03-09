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
	constructor(value,next = null) {
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
		this.size = 0
		this.head = null
		this.tail = null
	}

	/**
	 * Enqueues a value to the end of the queue.
	 *
	 * @param {number} value - The value to be enqueued
	 * @returns {void}
	 */
	enqueue(value) {
		const newNode = new Node(value)

    	if (this.head === null) {
      		this.head = newNode
      		this.tail = newNode
    	} else {
      		this.tail.next = newNode
      		this.tail = newNode
    	}

    	this.size++
	}

	/**
	 * Removes and returns the value at the front of the queue.
	 *
	 * @return {number} The value at the front of the queue, or null if the queue is empty.
	 */
	dequeue() {
		if (this.size === 0) {
			return null
		}

		const removedNode = this.head
		
		if (this.head === this.tail) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
		}

		this.size--
		return removedNode.value
	}
}
