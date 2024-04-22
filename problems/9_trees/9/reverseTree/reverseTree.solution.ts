import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

/**
 * Reverses the binary tree rooted at the given node. Left and right nodes are swapped. If the tree is empty, it returns null.
 *
 * @param {TreeNode} root - the root of the binary tree
 * @return {TreeNode} the root of the reversed binary tree
 * @example
 * reverseTree([1, [2, 3]]) => [1, [3, 2]]
 *       1          1
 *      / \        / \
 *     2   3      3   2
 *
 * reverseTree([1, [[2, [4, 5]], [3, [6, 7]]]]) => [1, [[3, [7, 6]], [2, [5, 4]]]]
 *       1          1
 *      / \        / \
 *     2   3      3   2
 *    / \ / \    / \ / \
 *   4  5 6  7  7  6 5  4
 */
export function reverseTree(root: TreeNode<number> | null) {
	if (root === null) {
		return root
	}

	const temp = root.left
	root.left = root.right
	root.right = temp

	reverseTree(root.left)
	reverseTree(root.right)

	return root
}

export function reverseTree2(root: TreeNode<number> | null) {
	if (root === null) {
		return root
	}

	const queue = [root]
	while (queue.length > 0) {
		const node = queue.shift()!
		const temp = node.left
		node.left = node.right
		node.right = temp
		if (node.left) {
			queue.push(node.left)
		}
		if (node.right) {
			queue.push(node.right)
		}
	}
	return root
}
