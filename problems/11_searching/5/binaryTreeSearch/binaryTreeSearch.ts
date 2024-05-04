import { TreeNode } from "../../../9_trees/1/TreeNode/TreeNode.ts"

/**
 * Searches for a target value in a binary search tree.
 *
 * @param {TreeNode<number>} root - The root node of the binary tree.
 * @param {number} target - The value to search for in the binary tree.
 * @return {TreeNode<number> | null} - Returns the node with the target value if found, otherwise returns null.
 * @example
 * binaryTreeSearch(
 * 	[1, [0, 2]],
 *  0
 * ) => 0
 *
 *       1
 *      / \
 *     0   2
 *
 * binaryTreeSearch(
 * 	[1, [[0, [null, null], [3, [2, [null, null]], [5, [4, null, null], [6, null, null]]]]]],
 * 	5
 * ) => 5
 *
 *       1
 *      / \
 *     0   3
 *        / \
 *       2   5
 *          / \
 *         4   6
 *
 * binaryTreeSearch(
 * 	[1, [[0, [null, null], [3, [2, [null, null]], [5, [4, null, null], [6, null, null]]]]]],
 * 	7
 * ) => null
 *
 *       1
 *      / \
 *     0   3
 *        / \
 *       2   5
 *          / \
 *         4   6
 */
export function binaryTreeSearch(root: TreeNode<number>, target: number): TreeNode<number> | null {
	while (true) {
		if (target < root.value) {
			if (root.left) {
				root = root.left
			} else {
				return null
			}
		} else if (target === root.value) {
			return root
		} else {
			if (root.right) {
				root = root.right
			} else {
				return null
			}
		}
	}
}
