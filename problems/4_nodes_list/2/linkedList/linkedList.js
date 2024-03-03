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
	 * @param {Node | null} next - The next Node of the constructor defaults to null.
	 */
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

/**
 * Creates a linked list from an array.
 *
 * @param {number[]} array - The array of numbers to be converted into a linked list.
 * @return {Node} - The head of the linked list.
 */
export function linkedList(array) {
	let head = new Node(null)
	let currentNode = head

	if (array.length === 0) {
		return null
	}


	for (let i = 0; i < array.length; i++) {
		const newNode = new Node(array[i])
		currentNode.next = newNode
		currentNode = newNode
	}

	return head.next
}

linkedList([1, 2, 3])