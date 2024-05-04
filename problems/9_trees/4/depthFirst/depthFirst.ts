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
export function depthFirst(node: TreeNode<number> | null) {
	//check if there is a tree
	if (node === null) return []

	//create array
	const returnArr: number[] = []

	//travel through the nodes
    function move(node: TreeNode<number> | null) {
        if (node === null) return
		//push all the nodes to the array
        returnArr.push(node.value)

		//travel if there is left
        move(node.left)
		//travel if there is right
        move(node.right)
    }

	//call the function first starting from the root node
    move(node)

	//return the array after we finish recursing functions
    return returnArr
}
