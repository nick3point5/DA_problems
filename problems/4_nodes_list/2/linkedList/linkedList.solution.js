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
 * Creates a linked list from an array.
 *
 * @param {number[]} array - The array of numbers to be converted into a linked list.
 * @return {Node} - The head of the linked list.
 */
export function linkedList(array) {
	if (array.length === 0) {
		return null
	}

	const result = new Node(null)
	let current = result

	for (let i = 0; i < array.length; i++) {
		const value = array[i]
		const element = new Node(value)
		current.next = element
		current = element
	}

	return result.next
}
