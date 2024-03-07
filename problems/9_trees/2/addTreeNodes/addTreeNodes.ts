import { OptionalType } from "../../../../test_utils/OptionalType.ts"
import { TreeNode } from "../../1/TreeNode/TreeNode.ts"

type OptNumber = OptionalType<number>
/**
 * Adds tree nodes based on the provided values.
 *
 * @param {TreeNode<number>} node - the node to which the values will be added
 * @param {[OptNumber, OptNumber]} values - the values to be added to the tree nodes
 * @return {TreeNode<number>} the updated node after adding the values
 */
export function addTreeNodes(node: TreeNode<number>, values: [OptNumber, OptNumber]) {
	const left = values[0] !== null ? new TreeNode(values[0]) : null
    const right = values[1] !== null ? new TreeNode(values[1]) : null

	if (left !== null) {
        node.left = left
    }

    if (right !== null) {
        node.right = right
    }
    
    return node
}
