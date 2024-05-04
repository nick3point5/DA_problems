import { GraphNode } from "./GraphNode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { createGraph } from "../../../../test_utils/createGraph.ts"


Deno.test("graphNode 1", () => {
	const node = new GraphNode(1)
	assertEquals(node.value, 1)
	assertEquals(node.neighbors, [])
	assertEquals(node.visited, false)
})

Deno.test("graphNode 2", () => {
	const node = new GraphNode("1")
	assertEquals(node.value, "1")
	assertEquals(node.neighbors, [])
	assertEquals(node.visited, false)
})

Deno.test("graphNode 3", () => {
	let node = new GraphNode(1)
	const head = node
	const nodes = [node]
	const n = 10
	for (let i = 1; i < n; i++) {
		const newNode = new GraphNode(i+1)
		newNode.previous = node
		nodes.push(newNode)
		node = newNode
	}

	assertEquals(nodes[9].previous, nodes[8])
	assertEquals(nodes[8].previous, nodes[7])
	assertEquals(nodes[2].previous, nodes[1])
	assertEquals(nodes[1].previous, nodes[0])
})

Deno.test("graphNode 4", () => {
	const node = new GraphNode(1)
	node.visited = true
	const neighbors = []
	const n = 4
	for (let i = 0; i < n; i++) {
		const node1 = new GraphNode(1)
		for (let i = 0; i < n; i++) {
			const node2 = new GraphNode(1)
			node1.neighbors.push(node2)
		}
		neighbors.push(node1)
	}
	node.neighbors = neighbors
	assertEquals(node.value, 1)
	assertEquals(node.neighbors, neighbors)
	assertEquals(node.visited, true)
})

Deno.test("graphNode 5", () => {
	const grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
	
	const nodeGrid = createGraph(grid)
	const node = nodeGrid[0][0]

	assertEquals(node?.value, 1)
	assertEquals(node?.neighbors[0], nodeGrid[0][1])
	assertEquals(node?.neighbors[1], nodeGrid[1][0])
})

Deno.test("graphNode 6", () => {
	const grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
	
	const nodeGrid = createGraph(grid)
	const node = nodeGrid[1][1]

	assertEquals(node?.value, 5)
	assertEquals(node?.neighbors[0], nodeGrid[1][2])
	assertEquals(node?.neighbors[1], nodeGrid[2][1])
	assertEquals(node?.neighbors[2], nodeGrid[1][0])
	assertEquals(node?.neighbors[3], nodeGrid[0][1])
	assertEquals(node?.neighbors.length, 4)
})

Deno.test("graphNode 7", () => {
	const grid = [
		[1, null, 3],
		[4, 5, 6],
		[7, null, 9],
	]
	
	const nodeGrid = createGraph(grid)
	const node = nodeGrid[1][1]

	assertEquals(node?.value, 5)
	assertEquals(node?.neighbors[0], nodeGrid[1][2])
	assertEquals(node?.neighbors[1], nodeGrid[1][0])
	assertEquals(node?.neighbors.length, 2)
})
