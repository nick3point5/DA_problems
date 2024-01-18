import { findMiddle } from "./findMiddle.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"

Deno.test("findMiddle 1", () => {
	const list = linkedList([1, 2, 3, 4, 5])
	const result = linkedList([3, 4, 5])
	assertEquals(findMiddle(list), result)
})

Deno.test("findMiddle 2", () => {
	const list = linkedList([1, 2, 3, 4, 5, 6])
	const result = linkedList([4, 5, 6])
	assertEquals(findMiddle(list), result)
})

Deno.test("findMiddle 3", () => {
	const list = linkedList([1, 2])
	const result = linkedList([2])
	assertEquals(findMiddle(list), result)
})

Deno.test("findMiddle 4", () => {
	const list = linkedList([1])
	const result = linkedList([1])
	assertEquals(findMiddle(list), result)
})

Deno.test("findMiddle 5", () => {
	const list = linkedList([])
	const result = linkedList([])
	assertEquals(findMiddle(list), result)
})
