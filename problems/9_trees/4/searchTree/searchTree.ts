import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

/**
 * Perform a search in a tree for a target value.
 *
 * @param {TreeNode<number> | null} node - the root node of the binary tree or null if the tree is empty
 * @param {number} target - the value to search for in the binary tree
 * @return {boolean} true if the target value is found in the binary tree, false otherwise
 * @example
 * searchTree(null, 1) => false
 * 
 * searchTree([1], 1) => true
 *       1
 * 
 * searchTree([1, [2, 3]], 2) => true
 *       1
 *      / \
 *     2   3
 * 
 * searchTree([1, [2, 3]], 5) => false
 *       1
 *      / \
 *     2   3
 * 
 * searchTree([1, [2, [4, 5], 3, [6, 7]]], 3) => true
 *       1
 *      / \
 *     2   3
 *    / \ / \
 *   4  5 6  7
 */
export function searchTree() {
	return null
}
