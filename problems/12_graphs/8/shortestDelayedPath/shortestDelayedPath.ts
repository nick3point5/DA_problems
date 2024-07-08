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
export function shortestDelayedPath(root: GraphNode<number>, target: GraphNode<number>): GraphNode<number> | null {
	return null
}
