export class TreeNode<T> {
	value: T
	left: TreeNode<T> | null
	right: TreeNode<T> | null
		/**
	 * Constructor for creating a new node with a given value and optional left and right children.
	 *
	 * @param {T} value - the value for the new node
	 * @param {TreeNode<T> | null} left - the left child node (optional)
	 * @param {TreeNode<T> | null} right - the right child node (optional)
	 */
	constructor(value: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}
