import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"
import { swap } from "./swap.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("swap 1", () => {
	const node = linkedList([1, 2])
	const expect = linkedList([2, 1])
	assertEquals(swap(node), expect)
})

Deno.test("swap 2", () => {
	const node = linkedList([2, 3])
	const expect = linkedList([3, 2])
	assertEquals(swap(node), expect)
})

Deno.test("swap 3", () => {
	const node = linkedList([1, 3])
	const expect = linkedList([3, 1])
	assertEquals(swap(node), expect)
})
