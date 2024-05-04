import { TreeNode } from "../problems/9_trees/1/TreeNode/TreeNode.solution.ts"

export function treeParser<T>(data: string) {
	const treeData: TreeNode<T> = JSON.parse(data)

	function createTreeNode(treeData: TreeNode<T> | null) {
		if (treeData === null) {
			return null
		}
		const node = new TreeNode(treeData.value)
		if (treeData.left) {
			node.left = createTreeNode(treeData.left)
		}
		if (treeData.right) {
			node.right = createTreeNode(treeData.right)
		}
		return node
	}

	return createTreeNode(treeData)
}
