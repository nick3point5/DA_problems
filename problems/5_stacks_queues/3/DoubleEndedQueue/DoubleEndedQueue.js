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
	constructor(value,next = null) {
		this.value = value
		this.next = next
	}
}

/**
 * Creates a DoubleEndedQueue data structure without arrays.
 *
 * @class
 * @property {Node} head - The head of the DoubleEndedQueue.
 * @property {Node} tail - The tail of the DoubleEndedQueue.
 */
export class DoubleEndedQueue {
	constructor() {
		this.head = null
		this.tail = null
	}

	/**
	 * Removes and returns the value at the front of the dequeue.
	 *
	 * @return {number} The value at the front of the dequeue, or null if the queue is empty.
	 */

	shift() {
		//its empty
		if (this.head === null) { return null }

        const returnValue = this.head.value

		//check if there is only 1 value in the queue that means when we remove a value it will be empty
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
			//there is more than one value in the queue so we can just make the second value the new head and it also removes the first value
            this.head = this.head.next
        }

		//return the value we removed
        return returnValue
	}

	/**
	 * Adds a new value to the beginning of the dequeue.
	 *
	 * @param {number} value - The value to be added to the dequeue.
	 */
	unshift(value) {
		const newNode = new Node(value)

		//if there is no head then that means the queue is empty so we set the head and tail to the same node because there is only one node
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
			//otherwise since we are adding a value to the beginning the head becomes the new value and the old head becomes the new node's next
            newNode.next = this.head
            this.head = newNode
        }
	}

	/**
	 * Adds a new value to the end of the dequeue.
	 *
	 * @param {number} value - The value to be added to the dequeue.
	 */
	push(value) {
		//we are adding to the end of the queue
		const newNode = new Node(value)

		//if there is no head this means the queue is empty so the head and tail are both the same
    	if (this.head === null) {
      		this.head = newNode
      		this.tail = newNode
    	} else {
			//the former last value becomes the second to last value and the new value we added is the last one
      		this.tail.next = newNode
      		this.tail = newNode
    	}
	}
	/**
	 * Pops the last value from the dequeue.
	 *
	 * @return {any} The value that was popped from the dequeue. Returns null if the dequeue is empty.
	 */
	pop() {
		//its empty
		if (this.head !== null) { return null }

        let currentNode = this.head
        let previousNode = null

		//loop to the last node
        while (currentNode.next !== null) {
            previousNode = currentNode
            currentNode = currentNode.next
        }

		//we are deleting the last node so we return it
        const returnValue = currentNode.value

		//if there is a previous node then it will be the new tail
        if (previousNode !== null) {
            previousNode.next = null
            this.tail = previousNode
        } else {
			//there is no previous node so that means the queue is empty
            this.head = null
            this.tail = null
        }
		//return the value we removed
        return returnValue
	}
}
