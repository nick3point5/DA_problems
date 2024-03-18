import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

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
export function sumTree(node: TreeNode<number> | null) {
	//same as depth first but with sum values
	if (node === null) return 0

	let sumValue: number = 0

    function move(node: TreeNode<number> | null) {
        if (node === null) return 0
		sumValue += node.value

        move(node.left)
        move(node.right)
    }

    move(node)

    return sumValue
}
