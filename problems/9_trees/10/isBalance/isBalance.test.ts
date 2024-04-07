import { makeTree, NestedArray } from "../../3/makeTree/makeTree.ts"
import { isBalance } from "./isBalance.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("isBalance 1", () => {
	assertEquals(isBalance(null), true)
})

Deno.test("isBalance 2", () => {
	const array: NestedArray = [1, [null, null]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), true)
})

Deno.test("isBalance 3", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), true)
})

Deno.test("isBalance 4", () => {
	const array: NestedArray = [1, [[2, [null, null]], null]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), true)
})

Deno.test("isBalance 5", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], null]], null]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), false)
})

Deno.test("isBalance 6", () => {
	const array: NestedArray = [1, [[2, [[3, [[4, [null, null]], null]], null]], null]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), false)
})

Deno.test("isBalance 7", () => {
	const array: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], null]]
	const tree = makeTree(array)
	assertEquals(isBalance(tree), false)
})
