import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

/**
 * Calculates the sum of all the values in the binary tree. If the tree is empty, it returns 0.
 *
 * @param {TreeNode<number> | null} root - The root of the binary tree
 * @return {number} The sum of all values in the binary tree
 * @example
 * sumTree([1, [2, 3]]) => 6
 *       1
 *      / \
 *     2   3
 *
 * sumTree([1, [[2, [4, 5]], [3, [6, 7]]]]) => 28
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 *
 * sumTree([7, [[6, [5, null]], [3, [2, 1]]]]) => 24
 *       7
 *      / \
 *     6   3
 *    /   / \
 *   5    2  1
 */
export function sumTree(root: TreeNode<number> | null) {
	function recursiveSum(node: TreeNode<number> | null, sum = 0): number {
		if (node === null) {
			return 0
		}

		return node.value + recursiveSum(node.left) + recursiveSum(node.right)
	}

	return recursiveSum(root)
}

export function sumTree2(root: TreeNode<number> | null) {
	if (root === null) {
		return 0
	}
	const queue = [root]
	let sum = 0

	while (queue.length > 0) {
		const node = queue.shift()!
		sum += node.value
		if (node.left) {
			queue.push(node.left)
		}
		if (node.right) {
			queue.push(node.right)
		}
	}
	return sum
}
