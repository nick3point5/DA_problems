import { GraphNode } from "../../5/GraphNode/GraphNode.solution.ts"

/**
 * Finds the shortest path to the target node in a graph from the root node. Returns null if no path is found. The path will be set by the `previous` property on each node.
 *
 * @param {GraphNode<number>} root - The root node of the graph.
 * @param {number} target - The target node value.
 * @return {GraphNode<number> | null} - The target node, which previous property represents the shortest path from the root to the target, or null if no path is found.
 */
export function shortestPath(root: GraphNode<number>, target: number): GraphNode<number> | null {
	function search(root: GraphNode<number>, target: number): GraphNode<number> | null {
		const path: GraphNode<number>[] = []

		const queue: GraphNode<number>[] = [root]

		while (queue.length > 0) {
			queue.sort((a, b) => a.distance - b.distance)
			const node = queue.shift()!

			if (node.visited) {
				continue
			}

			if (node.value === target) {
				return node
			}

			node.visited = true
			path.push(node)

			for (const neighbor of node.neighbors) {
				if (!neighbor.visited) {
					neighbor.distance = node.distance + 1
					neighbor.previous = node
					queue.push(neighbor)
				}
			}
		}
		return null
	}

	const targetNode = search(root, target)

	if (targetNode === null) {
		return null
	}

	return targetNode
}
