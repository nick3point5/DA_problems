import { GraphNode } from "../../5/GraphNode/GraphNode.ts"

/**
 * Searches for a target value in a graph starting from a given node.
 *
 * @param {GraphNode<number>} node - The starting node of the graph.
 * @param {number} target - The target value to search for.
 * @return {GraphNode<number> | null} The node containing the target value, or null if not found.
 */
export function searchGraph(node: GraphNode<number>, target: number): GraphNode<number> | null {
	function searchNeighbors(node: GraphNode<number>): GraphNode<number> | null {
		node.visited = true

		for (const neighbor of node.neighbors) {
			if (neighbor.value === target) {
				return neighbor
			} else if (neighbor.visited === false) {
				const result = searchNeighbors(neighbor)
				if (result) {
					return result
				}
			}
		}

		return null
	}

	return searchNeighbors(node)
}
