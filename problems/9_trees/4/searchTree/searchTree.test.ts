import { searchTree } from "./searchTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { NestedArray, makeTree } from "../../3/makeTree/makeTree.ts"


Deno.test("searchTree 1", () => {
	const tree = makeTree([1, [null, null]])

	assertEquals(searchTree(tree, 1), true)
})

Deno.test("searchTree 2", () => {
	const tree = makeTree([1, [null, null]])

	assertEquals(searchTree(tree, 2), false)
})

Deno.test("searchTree 3", () => {
	const tree = makeTree([1, [null, [2, [null, null]]]])

	assertEquals(searchTree(tree, 2), true)
})

Deno.test("searchTree 4", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], [4, [null, null]]]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)

	assertEquals(searchTree(tree, 4), true)
})

Deno.test("searchTree 5", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], null]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)

	assertEquals(searchTree(tree, 4), false)
})

Deno.test("searchTree 6", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], [4, [null, null]]]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)

	assertEquals(searchTree(tree, 9), false)
})