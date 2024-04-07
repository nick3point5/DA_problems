import { makeTree, NestedArray } from "../../3/makeTree/makeTree.ts"
import { sameTree } from "./sameTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("sameTree 1", () => {
	const tree1 = null
	const tree2 = null
	assertEquals(sameTree(tree1, tree2), true)
})

Deno.test("sameTree 2", () => {
	const array1: NestedArray = [1, [null, null]]
	const tree1 = makeTree(array1)
	const tree2 = null
	assertEquals(sameTree(tree1, tree2), false)
})

Deno.test("sameTree 3", () => {
	const array2: NestedArray = [1, [null, null]]
	const tree1 = null
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), false)
})

Deno.test("sameTree 4", () => {
	const array1: NestedArray = [1, [null, null]]
	const array2: NestedArray = [1, [null, null]]
	const tree1 = makeTree(array1)
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), true)
})

Deno.test("sameTree 5", () => {
	const array1: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const array2: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const tree1 = makeTree(array1)
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), true)
})

Deno.test("sameTree 6", () => {
	const array1: NestedArray = [1, [[2, [null, null]], [4, [null, null]]]]
	const array2: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const tree1 = makeTree(array1)
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), false)
})

Deno.test("sameTree 7", () => {
	const array1: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const array2: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const tree1 = makeTree(array1)
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), true)
})

Deno.test("sameTree 8", () => {
	const array1: NestedArray = [1, [[2, [null, [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const array2: NestedArray = [1, [[2, [[4, [null, null]], [5, [null, null]]]], [3, [[6, [null, null]], [7, [null, null]]]]]]
	const tree1 = makeTree(array1)
	const tree2 = makeTree(array2)
	assertEquals(sameTree(tree1, tree2), false)
})
