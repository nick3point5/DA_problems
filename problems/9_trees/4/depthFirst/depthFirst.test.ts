import { NestedArray, makeTree } from "../../3/makeTree/makeTree.ts"
import { depthFirst } from "./depthFirst.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"


Deno.test("depthFirst 1", () => {
	assertEquals(depthFirst(null), [])
})

Deno.test("depthFirst 2", () => {
	const array: NestedArray = [1, [null, null]]
	const tree = makeTree(array)
	assertEquals(depthFirst(tree), [1])
})

Deno.test("depthFirst 3", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const tree = makeTree(array)
	assertEquals(depthFirst(tree), [1, 2, 3])
})

Deno.test("depthFirst 4", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], [4, [null, null]]]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(depthFirst(tree), [1, 2, 3, 4, 5, 6, 7])
})

Deno.test("depthFirst 5", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], null]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(depthFirst(tree), [1, 2, 3, 5, 6, 7])
})

Deno.test("depthFirst 6", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(depthFirst(tree), [1, 2, 4, 5, 3, 6, 7])
})
