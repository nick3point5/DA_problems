import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

/**
 * Check if two binary trees are the same.
 *
 * @param {TreeNode<number> | null} tree1 - the first binary tree
 * @param {TreeNode<number> | null} tree2 - the second binary tree
 * @return {boolean} true if the trees are the same, false otherwise
 * @example
 * sameTree([1, [2, 3]], [1, [2, 3]]) => true
 *       1          1
 *      / \        / \
 *     2   3      2   3
 *
 * sameTree([1, [2, 3]], [1, [3, 2]]) => false
 *       1          1
 *      / \        / \
 *     2   3      3   2
 *
 * sameTree([1, [2, null]], [1, null]) => false
 *       1          1
 *      /
 *     2
 */
export function sameTree(tree1: TreeNode<number> | null, tree2: TreeNode<number> | null) : boolean {
    //check if node is both null
    if (tree1 === null && tree2 === null) {
        return true
    }

    //check if one node is null but not the other
    if (tree1 === null || tree2 === null) {
        return false
    }

    //check if values are not equal
    if (tree1.value !== tree2.value) {
        return false
    }

    //recursion until we know the whole tree
    return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right)
}