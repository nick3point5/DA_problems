import { appendLists } from "./appendLists.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"

Deno.test("appendLists 1", () => {
	const list1 = linkedList([1, 2, 3])
	const list2 = linkedList([4, 5, 6])
	const result = linkedList([1, 2, 3, 4, 5, 6])
	assertEquals(appendLists(list1, list2), result)
})

Deno.test("appendLists 2", () => {
	const list1 = linkedList([1, 2, 3])
	const list2 = linkedList([])
	const result = linkedList([1, 2, 3])
	assertEquals(appendLists(list1, list2), result)
})

Deno.test("appendLists 3", () => {
	const list1 = linkedList([])
	const list2 = linkedList([])
	const result = linkedList([])
	assertEquals(appendLists(list1, list2), result)
})

Deno.test("appendLists 4", () => {
	const list1 = linkedList([])
	const list2 = linkedList([1, 2, 3])
	const result = linkedList([1, 2, 3])
	assertEquals(appendLists(list1, list2), result)
})

Deno.test("appendLists 5", () => {
	const list1 = linkedList([1, 2, 3])
	const list2 = linkedList([1, 2, 3])
	const result = linkedList([1, 2, 3, 1, 2, 3])
	assertEquals(appendLists(list1, list2), result)
})
