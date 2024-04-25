import { binaryTreeSearch } from "./binaryTreeSearch.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { treeParser } from "../../../../test_utils/treeParser.ts"
import { TreeNode } from "../../../9_trees/1/TreeNode/TreeNode.ts"


Deno.test("binaryTreeSearch 1", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(0)
	
	assertEquals(binaryTreeSearch(tree1, 0), expectedNode)
})

Deno.test("binaryTreeSearch 2", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = null
	
	assertEquals(binaryTreeSearch(tree1, 7), expectedNode)
})

Deno.test("binaryTreeSearch 3", () => {
	const data = Deno.readTextFileSync("tree1.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(2)
	
	assertEquals(binaryTreeSearch(tree1, 2), expectedNode)
})

Deno.test("binaryTreeSearch 4", () => {
	const data = Deno.readTextFileSync("tree2.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(6)
	
	assertEquals(binaryTreeSearch(tree1, 6), expectedNode)
})

Deno.test("binaryTreeSearch 5", () => {
	const data = Deno.readTextFileSync("tree3.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(99)
	
	assertEquals(binaryTreeSearch(tree1, 99), expectedNode)
})

Deno.test("binaryTreeSearch 6", () => {
	const data = Deno.readTextFileSync("tree4.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(9999)
	
	assertEquals(binaryTreeSearch(tree1, 9999), expectedNode)
})

Deno.test("binaryTreeSearch 7", () => {
	const data = Deno.readTextFileSync("tree2.json")
	const tree1 = treeParser<number>(data)!
	const expectedNode = new TreeNode(5, new TreeNode(4), new TreeNode(6))
	
	assertEquals(binaryTreeSearch(tree1, 5), expectedNode)
})
