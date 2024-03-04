import { deleteElement } from "./deleteElement.ts"
import { assertEquals, assertThrows } from "https://deno.land/std@0.208.0/assert/mod.ts"

import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.ts"

Deno.test("deleteElement 1", () => {
	const list = linkedList([1, 2, 3])
	const result = linkedList([2, 3])
	assertEquals(deleteElement(list, 0), result)
})

Deno.test("deleteElement 2", () => {
	const list = linkedList([1, 2, 3])
	const result = linkedList([1, 3])
	assertEquals(deleteElement(list, 1), result)
})

Deno.test("deleteElement 3", () => {
	const list = linkedList([1, 2, 3])
	const result = linkedList([1, 2])
	assertEquals(deleteElement(list, 2), result)
})

Deno.test("deleteElement 4", () => {
	assertThrows(() => deleteElement(linkedList([1, 2, 3]), 3))
})

Deno.test("deleteElement 5", () => {
	assertThrows(() => deleteElement(linkedList([1, 2, 3]), -1))
})

Deno.test("deleteElement 4", () => {
	assertThrows(() => deleteElement(linkedList([1, 2, 3]), 4))
})
