import { binaryTreeSearch } from "./binaryTreeSearch.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { treeParser } from "../../../../test_utils/treeParser.ts"
import { TreeNode } from "../../../9_trees/1/TreeNode/TreeNode.ts"
import { dirname, fromFileUrl } from "https://deno.land/std/path/mod.ts"

const directory = dirname(import.meta.url)

Deno.test("binaryTreeSearch 1", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree1.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(0)

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 0)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 2", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree1.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = null

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 7)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 3", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree1.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(2)

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 2)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 4", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree2.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(6)

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 6)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 5", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree3.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(99)

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 99)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 6", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree4.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(9999)

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 9999)), JSON.stringify(expectedNode))
})

Deno.test("binaryTreeSearch 7", () => {
	const data = Deno.readTextFileSync(fromFileUrl(directory + "/tree2.json"))
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(5, new TreeNode(4), new TreeNode(6))

	assertEquals(JSON.stringify(binaryTreeSearch(tree1, 5)), JSON.stringify(expectedNode))
})
