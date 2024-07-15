import { shortestDelayedPath } from "./shortestDelayedPath.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { createGraph } from "../../../../test_utils/createGraph.ts"
import { GraphNode } from "../../5/GraphNode/GraphNode.solution.ts"

function getDistance(node: GraphNode<unknown> | null) {
	let distance = -1
	while (node !== null) {
		distance++
		node = node.previous
	}
	return distance
}

function getPath(node: GraphNode<unknown> | null) {
	const path: GraphNode<unknown>[] = []
	while (node !== null) {
		path.unshift(node)
		node = node.previous
	}
	return path
}

function comparePaths(path: GraphNode<unknown>[], coordinates: [number, number][], nodeGrid: (GraphNode<unknown> | null)[][]) {
	if (path.length !== coordinates.length) {
		return false
	}
	for (let i = 0; i < path.length; i++) {
		const node = path[i]
		const [row, col] = coordinates[i]
		const gridNote = nodeGrid[row][col]

		if (node !== gridNote) {
			return false
		}
	}
	return true
}

Deno.test("shortestDelayedPath 1", () => {
	const grid = [
		[1, 1, 1],
		[1, 1, 1],
		[1, 1, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[0][2]!
	const actual = shortestDelayedPath(root, target)

	const distance = getDistance(target)

	assertEquals(actual, target)
	assertEquals(distance, 2)
})

Deno.test("shortestDelayedPath 2", () => {
	const grid = [
		[1, 2, 1],
		[1, 1, 1],
		[1, 1, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[0][2]!
	const actual = shortestDelayedPath(root, target)

	const distance = getDistance(target)

	assertEquals(actual, target)
	assertEquals(distance, 2)
})

Deno.test("shortestDelayedPath 3", () => {
	const grid = [
		[1, 4, 1],
		[1, 1, 1],
		[1, 1, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[0][2]!
	const actual = shortestDelayedPath(root, target)

	const distance = getDistance(target)

	assertEquals(actual, target)
	assertEquals(distance, 4)
})

Deno.test("shortestDelayedPath 4", () => {
	const grid = [
		[1, 40, 1],
		[1, 10, 1],
		[1, 5, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[0][2]!
	const actual = shortestDelayedPath(root, target)

	const distance = getDistance(target)

	assertEquals(actual, target)
	assertEquals(distance, 6)
})

Deno.test("shortestDelayedPath 5", () => {
	const grid = [
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, null, 1, 1, 1, 1, 1, 1, 1, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[9][9]!
	const actual = shortestDelayedPath(root, target)

	const distance = getDistance(target)

	assertEquals(actual, null)
	assertEquals(distance, 0)
})

Deno.test("shortestDelayedPath 6", () => {
	const grid = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[100, 100, 100, 100, 100, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 100, 100, 100, 100, 1],
		[100, 100, 100, 100, 1, 1, 1, 1, 1, 1],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = nodeGrid[2][4]!
	const actual = shortestDelayedPath(root, target)

	const path = getPath(target)
	const expectedPath: [number, number][] = [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4],
		[0, 5],
		[0, 6],
		[0, 7],
		[0, 8],
		[0, 9],
		[1, 9],
		[2, 9],
		[3, 9],
		[4, 9],
		[5, 9],
		[6, 9],
		[7, 9],
		[8, 9],
		[9, 9],
		[9, 8],
		[9, 7],
		[9, 6],
		[9, 5],
		[9, 4],
		[8, 4],
		[7, 4],
		[6, 4],
		[5, 4],
		[4, 4],
		[3, 4],
		[2, 4],
	]

	const distance = getDistance(target)

	assertEquals(actual, target)
	assertEquals(distance, 30)
	assertEquals(comparePaths(path, expectedPath, nodeGrid), true)
})
