import { shortestPath } from "./shortestPath.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { createGraph } from "../../../../test_utils/createGraph.ts"
import { GraphNode } from "../../5/GraphNode/GraphNode.ts"

function getDistance(node: GraphNode<unknown> | null) {
	let distance = -1
	while (node !== null) {
		distance++
		node = node.previous
	}
	return distance
}

Deno.test("shortestPath 1", () => {
	const grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 9)
	const expected = nodeGrid[2][2]

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, 4)
})

Deno.test("shortestPath 2", () => {
	const grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 5)
	const expected = nodeGrid[1][1]

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, 2)
})

Deno.test("shortestPath 3", () => {
	const grid = [
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
		[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
		[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
		[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
		[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
		[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
		[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
		[91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 100)
	const expected = nodeGrid[9][9]

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, 18)
})

Deno.test("shortestPath 4", () => {
	const grid = [
		[1, 2, 3, 4, 5, null, 7, 8, 9, 10],
		[11, 12, 13, 14, null, 16, 17, 18, 19, 20],
		[21, 22, 23, 24, null, 26, 27, 28, 29, 30],
		[31, 32, 33, 34, null, 36, 37, 38, 39, 40],
		[41, 42, 43, 44, null, 46, 47, 48, 49, 50],
		[51, 52, 53, 54, null, 56, 57, 58, 59, 60],
		[61, 62, 63, 64, null, 66, 67, 68, 69, 70],
		[71, 72, 73, 74, null, 76, 77, 78, 79, 80],
		[81, 82, 83, 84, null, 86, 87, 88, 89, 90],
		[91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 10)
	const expected = nodeGrid[0][9]

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, 27)
})

Deno.test("shortestPath 5", () => {
	const grid = [
		[1, null, 3],
		[4, null, 6],
		[7, null, 9],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 6)
	const expected = null

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, -1)
})

Deno.test("shortestPath 6", () => {
	const grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 10)
	const expected = null

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, -1)
})

Deno.test("shortestPath 7", () => {
	const grid = [
		[1, 2, 3, 4, 5, null, 7, 8, 9, 10],
		[11, 12, 13, 14, null, 16, 17, 18, 19, 20],
		[21, 22, 23, 24, null, 26, 27, 28, 29, 30],
		[31, 32, 33, 34, null, 36, 37, 38, 39, 40],
		[41, 42, 43, 44, null, 46, 47, 48, 49, 50],
		[51, 52, 53, 54, null, 56, 57, 58, 59, 60],
		[61, 62, 63, 64, null, 66, 67, 68, 69, 70],
		[71, 72, 73, 74, null, 76, 77, 78, 79, 80],
		[null, null, null, 84, null, 86, 87, 88, 89, 90],
		[91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
	]
	const nodeGrid = createGraph(grid)
	const root = nodeGrid[0][0]!

	const target = shortestPath(root, 69)
	const expected = nodeGrid[6][8]!

	const distance = getDistance(target)

	assertEquals(target, expected)
	assertEquals(distance, 20)
})
