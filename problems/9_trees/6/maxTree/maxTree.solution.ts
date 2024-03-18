import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

/**
 * Finds the node with the maximum value in the binary tree.
 *
 * @param {TreeNode} root - the root node of the binary tree
 * @return {number} the node with the maximum value, or null if the tree is empty
 * @example
 * maxTree([1, [2, 3]]) => 3
 *       1
 *      / \
 *     2   3
 * 
 * maxTree([1, [[2, [4, 5]], [3, [6, 7]]]]) => 7
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 * 
 * maxTree([7, [[6, [5, 4]], [3, [2, 1]]]]) => 7
 *       7
 *      / \
 *     6   3
 *    / \ / \
 *   5  4 2  1
 */
export function maxTree(root: TreeNode<number> | null) {
	function traverse(node: TreeNode<number> | null, max: number | null = null) {
		if (node === null) {
			return max
		}

		if (max === null || node.value > max) {
			return traverse(node.right, traverse(node.left, node.value))
		}

		return traverse(node.right, traverse(node.left, max))
	}

	return traverse(root)
}

export function maxTree2(root: TreeNode<number> | null) {
	if (root === null) {
		return null
	}
	const queue = [root]
	let max: number | null = null

	while (queue.length > 0) {
		const node = queue.shift()!

		if (max === null || node.value > max) {
			max = node.value
		}

		if (node.left !== null) {
			queue.push(node.left)
		}
		if (node.right !== null) {
			queue.push(node.right)
		}
	}

	return max
}
