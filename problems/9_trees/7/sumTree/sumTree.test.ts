import { makeTree, NestedArray } from "../../3/makeTree/makeTree.ts"
import { sumTree } from "./sumTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("sumTree 1", () => {
	const root = null
	assertEquals(sumTree(root), 0)
})

Deno.test("sumTree 2", () => {
	const array: NestedArray = [1, [null, null]]
	const root = makeTree(array)
	assertEquals(sumTree(root), 1)
})

Deno.test("sumTree 3", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const root = makeTree(array)
	assertEquals(sumTree(root), 6)
})

Deno.test("sumTree 4", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const root = makeTree(array)
	assertEquals(sumTree(root), 28)
})

Deno.test("sumTree 5", () => {
	const array: NestedArray = [7, [[6, [null, [3, [null, null]]]], [5, [[2, [null, null]], [1, [null, null]]]]]]
	const root = makeTree(array)
	assertEquals(sumTree(root), 24)
})
