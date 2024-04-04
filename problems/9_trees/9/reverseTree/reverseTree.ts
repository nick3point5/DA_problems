import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

/**
 * Reverses the binary tree rooted at the given node. Left and right nodes are swapped. If the tree is empty, it returns null.
 *
 * @param {TreeNode} root - the root of the binary tree
 * @return {TreeNode} the root of the reversed binary tree
 * @example
 * reverseTree([1, [2, 3]]) => [1, [3, 2]]
 *       1          1
 *      / \        / \
 *     2   3      3   2
 * 
 * reverseTree([1, [[2, [4, 5]], [3, [6, 7]]]]) => [1, [[3, [7, 6]], [2, [5, 4]]]]
 *       1          1
 *      / \        / \
 *     2   3      3   2
 *    / \ / \    / \ / \
 *   4  5 6  7  7  6 5  4
 */
export function reverseTree(root: TreeNode<number> | null) {
	if (root === null) { return null } //if its null stop

    const saved = root.right //save the right node so we can set the left to the right after
    root.right = root.left
    root.left = saved

    reverseTree(root.left) //recursive for the left
    reverseTree(root.right) //recursive for the right

    return root //return the whole tree after it has been reversed
}
