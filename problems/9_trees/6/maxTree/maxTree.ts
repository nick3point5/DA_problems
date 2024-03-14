import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

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
export function maxTree(node: TreeNode<number> | null) {
	//same as depth first but with max value
	if (node === null) return null

	let maxValue: number = node.value

    function move(node: TreeNode<number> | null) {
        if (node === null) return null

        if (node.value > maxValue) {
			maxValue = node.value
		}

        move(node.left)
        move(node.right)
    }

    move(node)

    return maxValue
}
