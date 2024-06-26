import { OptionalType } from "../../../../test_utils/OptionalType.ts"
import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

export type NestedArray = [number, [OptionalType<NestedArray>, OptionalType<NestedArray>]]
/**
 * Creates a binary tree from the given array.
 *
 * @param {NestedArray} array - the array to create the binary tree from
 * @return {TreeNode} - the root node of the binary tree
 * @example
 * makeTree([1, [null, null]])=>
 *     1
 *
 * makeTree([1, [[2, [null, null]], [3, [null, null]]]])=>
 *     1
 *    / \
 *   2   3
 *
 * makeTree([1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]])=>
 *     1
 *    / \
 *   2   3
 *  / \ / \
 * 4  5 6  7
 *
 * makeTree([1, [[2, [null, [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]])=>
 *     1
 *    / \
 *   2   3
 *    \ / \
 *    5 6  7
 */
export function makeTree() {
	return null
}
