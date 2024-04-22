import { TreeNode } from "../../1/TreeNode/TreeNode.solution.ts"

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
export function sameTree(tree1: TreeNode<number> | null, tree2: TreeNode<number> | null): boolean {
	if (tree1 === null && tree2 === null) {
		return true
	}

	if (tree1 === null || tree2 === null) {
		return false
	}

	return (
		tree1.value === tree2.value &&
		sameTree(tree1.left, tree2.left) &&
		sameTree(tree1.right, tree2.right)
	)
}

export function sameTree2(tree1: TreeNode<number> | null, tree2: TreeNode<number> | null): boolean {
	const queue1 = [tree1]
	const queue2 = [tree2]

	while (queue1.length > 0 && queue2.length > 0) {
		const node1 = queue1.shift()!
		const node2 = queue2.shift()!

		if (node1 === null && node2 === null) {
			continue
		}

		if (node1 === null || node2 === null) {
			return false
		}

		if (node1.value !== node2.value) {
			return false
		}

		queue1.push(node1.left, node1.right)
		queue2.push(node2.left, node2.right)
	}

	return queue1.length === 0 && queue2.length === 0
}

export function sameTree3(tree1: TreeNode<number> | null, tree2: TreeNode<number> | null): boolean {
	return JSON.stringify(tree1) === JSON.stringify(tree2)
}
