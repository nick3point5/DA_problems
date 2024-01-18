import { reverseList as reverseList } from "./reverseList.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"

Deno.test("reverseList 1", () => {
	const list = linkedList([1, 2, 3, 4, 5])
	const result = linkedList([5, 4, 3, 2, 1])
	assertEquals(reverseList(list), result)
})

Deno.test("reverseList 2", () => {
	const list = linkedList([1, 2, 3])
	const result = linkedList([3, 2, 1])
	assertEquals(reverseList(list), result)
})

Deno.test("reverseList 3", () => {
	const list = linkedList([1])
	const result = linkedList([1])
	assertEquals(reverseList(list), result)
})

Deno.test("reverseList 4", () => {
	const list = linkedList([])
	const result = linkedList([])
	assertEquals(reverseList(list), result)
})
