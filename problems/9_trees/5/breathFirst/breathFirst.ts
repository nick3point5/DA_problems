import { TreeNode } from "../../1/TreeNode/TreeNode.ts";

/**
 * Perform a breath first (left to right) traversal on the given binary tree node.
 *
 * @param {TreeNode<number> | null} node - the starting node for traversal
 * @return {number[]} an array of values in breath first order
 * @example
 * breathFirst([1, [2, 3]]) => [1, 2, 3]
 *       1
 *      / \
 *     2   3
 * 
 * breathFirst([1, [[2, [4, 5]], [3, [6, 7]]]]) => [1, 2, 3, 4, 5, 6, 7]
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 * 
 * breathFirst([1, [[2, [3, 4]], [5, [6, 7]]]]) => [1, 2, 5, 3, 4, 6, 7]
 *       1
 *      / \
 *     2   5
 *    / \ / \
 *   3  4 6  7
 */

export function breathFirst(node: TreeNode<number> | null) {
	if (node === null) return []

	const returnArr: number[] = []
	const queue: TreeNode<number>[] = [node]

	while (queue.length !== 0) {
		const currentNode: TreeNode<number> = queue.shift() !
		returnArr.push(currentNode.value)
		
		if (currentNode.left !== null) {
			queue.push(currentNode.left)
		}
		if (currentNode.right !== null) {
			queue.push(currentNode.right)
		}
	}

	return returnArr
}
