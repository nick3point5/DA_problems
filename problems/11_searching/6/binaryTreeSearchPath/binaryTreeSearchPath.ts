import { TreeNode } from "../../../9_trees/1/TreeNode/TreeNode.ts"

/**
 * Searches for the optimal path to find a target value in a binary search tree.
 *
 * @param {TreeNode<number>} root - The root node of the binary tree.
 * @param {number} target - The value to search for in the binary tree.
 * @return {TreeNode<number>[] | null} - Returns an array of number values from the root node to the node with the target value if found, otherwise returns null.
 * @example
 * binaryTreeSearchPath(
 * 	[1, [0, 2]],
 *  0
 * ) => [1, 0]
 *
 *       1
 *      / \
 *     0   2
 *
 * binaryTreeSearchPath(
 * 	[1, [[0, [null, null], [3, [2, [null, null]], [5, [4, null, null], [6, null, null]]]]]],
 * 	2
 * ) => [1, 3, 2]
 *
 *       1
 *      / \
 *     0   3
 *        / \
 *       2   5
 *          / \
 *         4   6
 *
 * binaryTreeSearchPath(
 * 	[1, [[0, [null, null], [3, [2, [null, null]], [5, [4, null, null], [6, null, null]]]]]],
 * 	6
 * ) => [1, 3, 5, 6]
 *
 *       1
 *      / \
 *     0   3
 *        / \
 *       2   5
 *          / \
 *         4   6
 *
 * binaryTreeSearchPath(
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
export function binaryTreeSearch() {
	return null
}
