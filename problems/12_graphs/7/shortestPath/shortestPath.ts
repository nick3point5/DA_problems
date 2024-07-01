import { GraphNode } from "../../5/GraphNode/GraphNode.ts"

/**
 * Finds the shortest path to the target node in a graph from the root node. Returns null if no path is found. The path will be set by the `previous` property on each node.
 *
 * @param {GraphNode<number>} root - The root node of the graph.
 * @param {number} target - The target node value.
 * @return {GraphNode<number> | null} - The target node, which previous property represents the shortest path from the root to the target, or null if no path is found.
 */
export function shortestPath(root: GraphNode<number>, target: number): GraphNode<number> | null {

	function breathFirst(node: GraphNode<number>, distance: number) {
		node.visited = true
		node.distance = distance

		
	}

	shortestPath(root, 0)

	return null
}