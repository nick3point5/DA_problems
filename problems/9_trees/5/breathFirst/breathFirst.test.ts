import { makeTree, NestedArray } from "../../3/makeTree/makeTree.ts"
import { breathFirst } from "./breathFirst.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("breathFirst 1", () => {
	assertEquals(breathFirst(null), [])
})

Deno.test("breathFirst 2", () => {
	const array: NestedArray = [1, [null, null]]
	const tree = makeTree(array)
	assertEquals(breathFirst(tree), [1])
})

Deno.test("breathFirst 3", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const tree = makeTree(array)
	assertEquals(breathFirst(tree), [1, 2, 3])
})

Deno.test("breathFirst 4", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(breathFirst(tree), [1, 2, 3, 4, 5, 6, 7])
})

Deno.test("breathFirst 5", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], null]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(breathFirst(tree), [1, 2, 3, 4, 6, 7])
})

Deno.test("breathFirst 6", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], [4, [null, null]]]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const tree = makeTree(array)
	assertEquals(breathFirst(tree), [1, 2, 5, 3, 4, 6, 7])
})
