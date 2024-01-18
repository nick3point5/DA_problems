import { findMax } from "./findMax.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"

Deno.test("findMax 1", () => {
	const list = linkedList([1, 2, 3, 4, 5, 6, 7, 8, 9])

	assertEquals(findMax(list), 9)
})

Deno.test("findMax 2", () => {
	const list = linkedList([9, 8, 7, 6, 5, 4, 3, 2, 1])

	assertEquals(findMax(list), 9)
})

Deno.test("findMax 3", () => {
	const list = linkedList([5, 8, 9, 3, 2, 6, 7, 1, 4])

	assertEquals(findMax(list), 9)
})

Deno.test("findMax 4", () => {
	const list = linkedList([])

	assertEquals(findMax(list), null)
})

Deno.test("findMax 5", () => {
	const list = linkedList([1])

	assertEquals(findMax(list), 1)
})
