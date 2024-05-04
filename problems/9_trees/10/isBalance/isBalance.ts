import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

/**
 * Check if the given binary tree is balanced or not.
 *
 * @param {TreeNode<number> | null} root - the root of the binary tree
 * @return {boolean} true if the binary tree is balanced, false otherwise
 * @example
 * isBalance([1, [2, 3]]) => true
 *       1
 *      / \
 *     2   3
 *
 * isBalance([1, [[2, [4, 5]], [3, [6, 7]]]]) => true
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 *
 * isBalance([1, [2, null]]) => true
 *       1
 *      /
 *     2
 *
 * isBalance([1, [2, [3]]]) => false
 *       1
 *      /
 *     2
 *    /
 *   3
 */
export function isBalance(root: TreeNode<number> | null) {
	if (root === null) {
		return true
	}

	let left = 0
	let right = 0

	checkNode(root.left, "left")
	checkNode(root.right, "right")
	
	function checkNode(node: TreeNode<number> | null, side: string) {
		if (side === "left") {
			if (node !== null) {
				left++

				if (node.left !== null) {
					checkNode(node.left, "left")
				} else if (node.right !== null) {
					checkNode(node.right, "left")
				}
			}
		} else {
			if (node !== null) {
				right++

				if (node.left !== null) {
					checkNode(node.left, "right")
				} else if (node.right !== null) {
					checkNode(node.right, "right")
				}
			}
		}
	}

	return Math.abs(left-right) <= 1
}
