/**
 * GraphNode class with the specified value, neighbors, and visited state.
 *
 * @property {T} value - The value of the graph node.
 * @property {GraphNode<T>[]} neighbors - The neighbors of the graph node. Defaults to an empty array.
 * @property {boolean} visited - The visited state of the graph node. Defaults to false.
 * @property {number} distance - The distance of the graph node. Defaults to 0.
 * @property {GraphNode<T> | null} previous - The previous node in the shortest path. Defaults to null.
 */
export class GraphNode<T> {
	value: T
	neighbors: GraphNode<T>[]
	visited: boolean
	distance: number
	previous: GraphNode<T> | null

	constructor(value: T, neighbors: GraphNode<T>[] = [], visited = false, distance = 0, previous: GraphNode<T> | null = null) {
		this.value = value
		this.neighbors = neighbors
		this.visited = visited
		this.distance = distance
		this.previous = previous
	}
}
