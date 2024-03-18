import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

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
export function depthFirst(node: TreeNode<number> | null) {
	function search(node: TreeNode<number> | null, result: number[] = []) {
		if (node === null) {
			return result
		}
		result.push(node.value)
		search(node.left, result)
		search(node.right, result)
		return result
	}

	return search(node)
}

export function depthFirst2(node: TreeNode<number> | null) {
	const result: number[] = []

	function search(node: TreeNode<number> | null) {
		if (node === null) {
			return
		}
		result.push(node.value)
		search(node.left)
		search(node.right)
	}

	search(node)
	return result
}

export function depthFirst3(node: TreeNode<number> | null) {
	if (node === null) {
		return []
	}
	const stack: (TreeNode<number>)[] = []

	stack.push(node)

	const result: number[] = []

	while (stack.length > 0) {
		const current = stack.pop()!

		result.push(current.value)
		if (current.right !== null) {
			stack.push(current.right)
		}
		if (current.left !== null) {
			stack.push(current.left)
		}
	}

	return result
}
