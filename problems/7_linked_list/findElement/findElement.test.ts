import { findElement } from "./findElement.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.ts"

Deno.test("findElement 1", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findElement(list, 1), 0)
})

Deno.test("findElement 2", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findElement(list, 2), 1)
})

Deno.test("findElement 3", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findElement(list, 3), 2)
})

Deno.test("findElement 4", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findElement(list, 4), 3)
})

Deno.test("findElement 5", () => {
	const list = linkedList([1, 2, 3, 4])
	assertEquals(findElement(list, 5), -1)
})
