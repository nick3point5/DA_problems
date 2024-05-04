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
    const [left, right] = values

	if (left !== null) {
        node.left = new TreeNode(left)
    }

    if (right !== null) {
        node.right = new TreeNode(right)
    }
    
    return node;
}
