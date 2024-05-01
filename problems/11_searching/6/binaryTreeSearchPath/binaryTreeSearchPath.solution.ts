import { TreeNode } from "../../../9_trees/1/TreeNode/TreeNode.solution.ts"

/**
 * Searches for the optimal path to find a target value in a binary search tree.
 *
 * @param {TreeNode<number>} root - The root node of the binary tree.
 * @param {number} target - The value to search for in the binary tree.
 * @return {number[] | null} - Returns an array of number values from the root node to the node with the target value if found, otherwise returns null.
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
export function binaryTreeSearchPath(root: TreeNode<number>, target: number) {
	function search(node: TreeNode<number> | null, target: number, path: number[] = []): number[] | null {
		if (node === null) return null

		path.push(node.value)

		if (node.value === target) return path

		if (node.value > target) return search(node.left, target, path)

		if (node.value < target) return search(node.right, target, path)

		return null
	}

	return search(root, target)
}

export function binaryTreeSearchPath2(root: TreeNode<number>, target: number) {
	const path = []

	let node: TreeNode<number> | null = root

	while (node !== null) {
		path.push(node)

		if (node.value === target) return path

		if (node.value > target) {
			node = node.left
		} else {
			node = node.right
		}
	}

	return null
}
