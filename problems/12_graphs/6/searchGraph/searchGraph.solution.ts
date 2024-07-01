import { GraphNode } from "../../5/GraphNode/GraphNode.solution.ts"

/**
 * Searches for a target value in a graph starting from a given node.
 *
 * @param {GraphNode<number>} node - The starting node of the graph.
 * @param {number} target - The target value to search for.
 * @return {GraphNode<number> | null} The node containing the target value, or null if not found.
 */
export function searchGraph(node: GraphNode<number>, target: number): GraphNode<number> | null {
	if (node.value === target) {
		return node
	}

	node.visited = true

	for (const neighbor of node.neighbors) {
		if (neighbor.visited) continue
		const result = searchGraph(neighbor, target)
		if (result !== null) {
			return result
		}
	}

	return null
}

export function searchGraph2(node: GraphNode<number>, target: number): GraphNode<number> | null {
	const queue = [node]

	while (queue.length > 0) {
		const current = queue.shift()!

		if (current.value === target) {
			return current
		}

		current.visited = true

		for (const neighbor of current.neighbors) {
			if (!neighbor.visited) {
				neighbor.visited = true
				queue.push(neighbor)
			}
		}
	}

	return null
}
