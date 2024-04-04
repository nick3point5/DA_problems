import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

/**
 * Performs a depth-first (left-to-right) search on the given binary tree node.
 *
 * @param {TreeNode<number> | null} node - the node to start the search from
 * @return {number[]} an array containing the values of the nodes visited in depth-first order
 * @example
 * depthFirst([1, [2, 3]]) => [1, 2, 3]
 *       1
 *      / \
 *     2   3
 *
 * depthFirst([1, [2, [3, 4], 5, [6, 7]]]) => [1, 2, 3, 4, 5, 6, 7]
 *       1
 *      / \
 *     2   5
 *    / \ / \
 *   3  4 6  7
 * depthFirst([1, [2, [4, 5], 3, [6, 7]]]) => [1, 2, 4, 5, 3, 6, 7]
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 */
export function depthFirst() {
	return null
}
