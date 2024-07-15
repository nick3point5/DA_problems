import { GraphNode } from "../../5/GraphNode/GraphNode.ts"

/**
 * Finds the shortest delayed path from the root node to the target node in a graph.
 * The node's value indicate the distance it takes to move through.
 * Consider the following graph
 * 
 * start - 5 - end
 * 	   |       |
 * 		 1 - 1 - 1
 * 
 * The path going to through 5 takes longer than going through the 1's.
 * So the path should favor going through the 1's rather than the 5.
 * 
 *
 * @param {GraphNode<number>} root - The starting node of the path.
 * @param {GraphNode<number>} target - The target node to reach.
 * @return {GraphNode<number> | null} The target node, which previous property represents the shortest path from the root to the target, or null if no path is found.
 */

function sortNodes(a: GraphNode<number>, b: GraphNode<number>) {
	return a.distance - b.distance
}

export function shortestDelayedPath(root: GraphNode<number>, target: GraphNode<number>): GraphNode<number> | null {
	const queue = [root]
	root.visited = true
	root.distance = root.value

	while(queue.length > 0) {
		queue.sort(sortNodes)
		const currentNode = queue.shift()!

		for (const neighbor of currentNode.neighbors) {
			if (neighbor.visited === false) {
				neighbor.visited = true
				if (neighbor.distance === 0 || currentNode.distance + neighbor.value < neighbor.distance) {
					neighbor.distance = currentNode.distance + neighbor.value
					neighbor.previous = currentNode
					queue.push(neighbor)
				}
			}
		}
	}
	
	if (target.previous === null) {
		return null
	} else {
		return target
	}
}
