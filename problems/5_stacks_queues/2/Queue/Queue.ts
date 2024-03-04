import { Node } from "../../../4_nodes_list/1/Node/Node.ts"

/**
 * Creates a queue data structure without arrays.
 *
 * @class
 * @property {Node<T> | null} head - The head of the queue.
 * @property {Node<T> | null} tail - The tail of the queue.
 */
export class Queue<T> {
	head: Node<T> | null
	tail: Node<T> | null
	constructor() {
	}

	/**
	 * Enqueues a value to the end of the queue.
	 *
	 * @param {T} value - The value to be enqueued
	 * @returns {void}
	 */
	enqueue(value) {
	}

	/**
	 * Removes and returns the value at the front of the queue.
	 *
	 * @return {T | null} The value at the front of the queue, or null if the queue is empty.
	 */
	dequeue() {
	}
}
