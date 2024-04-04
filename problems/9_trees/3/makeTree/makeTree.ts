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
<<<<<<< HEAD
export function makeTree(array: NestedArray) {
	if (!array) {
		return null;
	}
	
	//split array into base and then the branches for example [1, [null, null]] will be turned into base = [1] branches = [null,null]
	const base = array[0];
	const branches = array[1];
	//make node of the base
	const node = new TreeNode(base);

	//check if there is a left or right node if there is then call the makeTree function again 
	if (branches[0]) {
		//make left node then call the makeTree function again to check if there are any new branches connected to the left branch
        node.left = makeTree(branches[0]);
    }
    if (branches[1]) {
		//make right node then call the makeTree function again to check if there are any new branches connected to the right branch
        node.right = makeTree(branches[1]);
    }

	//returns the base node after all the recursion is done
	//if it is a recursion function then it will return the node that it created but the final return will be from function called first
	return node;
}
=======
export function makeTree() {
	return null
}
>>>>>>> 923da52243c88c89edb96b258594b238ad044005
