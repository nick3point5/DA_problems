import { reverseTree } from "./reverseTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { NestedArray, makeTree } from "../../3/makeTree/makeTree.ts"


Deno.test("reverseTree 1", () => {
	const root = null
	const result = null
	assertEquals(reverseTree(root), result)
})

Deno.test("reverseTree 2", () => {
	const array1: NestedArray = [1, [null, null]]
	const array2: NestedArray = [1, [null, null]]
	const root = makeTree(array1)
	const result = makeTree(array2)

	assertEquals(reverseTree(root), result)
})

Deno.test("reverseTree 3", () => {
	const array1: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const array2: NestedArray = [1, [[3, [null, null]], [2, [null, null]]]]
	const root = makeTree(array1)
	const result = makeTree(array2)

	assertEquals(reverseTree(root), result)
})

Deno.test("reverseTree 4", () => {
	const array1: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const array2: NestedArray = [1, [[3, [[7, [null, null]], [6, [null, null]]]], [2, [[5, [null, null]], [4, [null, null]]]]]]
	const root = makeTree(array1)
	const result = makeTree(array2)
	assertEquals(reverseTree(root), result)
})

Deno.test("reverseTree 5", () => {
	const array1: NestedArray = [1, [[2, [[4, [null, null]], null]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const array2: NestedArray = [1, [[3, [[7, [null, null]], [6, [null, null]]]], [2, [null, [4, [null, null]]]]]]
	const root = makeTree(array1)
	const result = makeTree(array2)
	assertEquals(reverseTree(root), result)
})

Deno.test("reverseTree 6", () => {
	const array1: NestedArray = [1, [[2, [null, [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const array2: NestedArray = [1, [[3, [[7, [null, null]], [6, [null, null]]]], [2, [[5, [null, null]], null]]]]
	const root = makeTree(array1)
	const result = makeTree(array2)
	assertEquals(reverseTree(root), result)
})
