import { GraphNode } from "../problems/12_graphs/5/GraphNode/GraphNode.solution.ts"

export function createGraph(grid: (number | null)[][]) {
	function addNeighbors(node: GraphNode<number>, nodeGrid: (GraphNode<number> | null)[][], coordinates: [number, number]) {
		const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
		const [i, j] = coordinates

		for (const [di, dj] of directions) {
			const row = i + di
			const col = j + dj
			if (
				row < nodeGrid.length &&
				row >= 0 &&
				col >= 0 &&
				col < nodeGrid[row].length &&
				nodeGrid[row][col] !== null
			) {
				node.neighbors.push(nodeGrid[row][col]!)
			}
		}
	}
	function createNodeGrid(grid: (number | null)[][]) {
		const nodeGrid: (GraphNode<number> | null)[][] = []

		for (let i = 0; i < grid.length; i++) {
			nodeGrid.push([])
			for (let j = 0; j < grid[i].length; j++) {
				const value = grid[i][j]
				if (value === null) {
					nodeGrid[i].push(null)
				} else {
					nodeGrid[i].push(new GraphNode(value))
				}
			}
		}

		return nodeGrid
	}

	const nodeGrid = createNodeGrid(grid)
	for (let i = 0; i < nodeGrid.length; i++) {
		const row = nodeGrid[i]
		for (let j = 0; j < row.length; j++) {
			const node = nodeGrid[i][j]
			if (node === null) {
				continue
			}
			addNeighbors(node, nodeGrid, [i, j])
		}
	}

	return nodeGrid
}
