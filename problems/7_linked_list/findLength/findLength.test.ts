import { findLength } from "./findLength.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.ts"

Deno.test("findLength 1", () => {
	const list = linkedList([1])
	assertEquals(findLength(list), 1)
})

Deno.test("findLength 2", () => {
	const list = linkedList([1, 2, 3])
	assertEquals(findLength(list), 3)
})

Deno.test("findLength 3", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findLength(list), 4)
})

Deno.test("findLength 4", () => {
	const list = linkedList([])
	assertEquals(findLength(list), 0)
})
