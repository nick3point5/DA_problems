import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"
import { pop_one } from "./pop_one.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("pop_one 1", () => {
	const node = linkedList([1, 2])
	const assert = pop_one(node)
	const expect = linkedList([1])
	const expect2 = linkedList([2])

	assertEquals(node, expect)
	assertEquals(assert, expect2)
})

Deno.test("pop_one 2", () => {
	const node = linkedList([1, 3])
	const assert = pop_one(node)
	const expect = linkedList([1])
	const expect2 = linkedList([3])

	assertEquals(node, expect)
	assertEquals(assert, expect2)
})

Deno.test("pop_one 3", () => {
	const node = linkedList([2, 4])
	const assert = pop_one(node)
	const expect = linkedList([2])
	const expect2 = linkedList([4])

	assertEquals(node, expect)
	assertEquals(assert, expect2)
})
