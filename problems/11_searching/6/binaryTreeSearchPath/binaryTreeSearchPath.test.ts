import { binaryTreeSearchPath } from "./binaryTreeSearchPath.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { treeParser } from "../../../../test_utils/treeParser.ts"


Deno.test("binaryTreeSearchPath 1", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree = treeParser<number>(data)!
	const path = [1, 0]

	assertEquals(binaryTreeSearchPath(tree, 0), path)
})

Deno.test("binaryTreeSearchPath 2", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree = treeParser<number>(data)!
	const path = null

	assertEquals(binaryTreeSearchPath(tree, 7), path)
})

Deno.test("binaryTreeSearchPath 3", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree = treeParser<number>(data)!
	const path = [1, 2]

	assertEquals(binaryTreeSearchPath(tree, 2), path)
})

Deno.test("binaryTreeSearchPath 4", () => {
	const data = Deno.readTextFileSync("tree2.json")
	const tree = treeParser<number>(data)!
	const path: number[] = [1, 3, 5, 6]

	assertEquals(binaryTreeSearchPath(tree, 6), path)
})

Deno.test("binaryTreeSearchPath 5", () => {
	const data = Deno.readTextFileSync("tree3.json")
	const tree = treeParser<number>(data)!
	const path: number[] = [
		31,
		47,
		63,
		71,
		79,
		87,
		91,
		95,
		97,
		98,
		99,
	]

	assertEquals(binaryTreeSearchPath(tree, 99), path)
})

Deno.test("binaryTreeSearchPath 6", () => {
	const data = Deno.readTextFileSync("tree4.json")
	const tree = treeParser<number>(data)!
	const path: number[] = [
		2047,
		4095,
		6143,
		7167,
		8191,
		8703,
		9215,
		9471,
		9599,
		9727,
		9791,
		9855,
		9887,
		9919,
		9951,
		9967,
		9975,
		9983,
		9987,
		9991,
		9995,
		9997,
		9998,
		9999,
	]

	assertEquals(binaryTreeSearchPath(tree, 9999), path)
})

Deno.test("binaryTreeSearchPath 7", () => {
	const data = Deno.readTextFileSync("tree4.json")
	const tree = treeParser<number>(data)!
	const path: number[] = [
		2047,
		4095,
		6143,
		7167,
		8191,
		8703,
		9215,
		9471,
		9599,
		9727,
		9791,
		9855,
		9887,
		9919,
	]

	assertEquals(binaryTreeSearchPath(tree, 9919), path)
})