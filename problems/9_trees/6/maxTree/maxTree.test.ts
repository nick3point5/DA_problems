import { makeTree, NestedArray } from "../../3/makeTree/makeTree.ts"
import { maxTree } from "./maxTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("maxTree 1", () => {
	const array: NestedArray = [1, [null, null]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 1)
})

Deno.test("maxTree 2", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 3)
})

Deno.test("maxTree 3", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [null, null]]]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 5)
})

Deno.test("maxTree 4", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 7)
})

Deno.test("maxTree 5", () => {
	const array: NestedArray = [7, [[6, [[4, [null, null]], [3, [null, null]]]], [5, [[2, [null, null]], [1, [null, null]]]]]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 7)
})

Deno.test("maxTree 6", () => {
	const array: NestedArray = [4, [[2, [[7, [null, null]], [5, [null, null]]]], [9, [[1, [null, null]], [6, [null, null]]]]]]
	const root = makeTree(array)
	assertEquals(maxTree(root), 9)
})

Deno.test("maxTree 7", () => {
	const root = null
	assertEquals(maxTree(root), null)
})
