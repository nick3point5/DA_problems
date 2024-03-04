import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"
import { dequeue_one } from "./dequeue_one.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("dequeue_one 1", () => {
	const node = linkedList([1, 2])
	const next = node.next
	const assert = dequeue_one(node)
	const expect = linkedList([1])
	const expect2 = linkedList([2])

	assertEquals(assert, expect)
	assertEquals(next, expect2)
})

Deno.test("dequeue_one 2", () => {
	const node = linkedList([1, 3])
	const next = node.next
	const assert = dequeue_one(node)
	const expect = linkedList([1])
	const expect2 = linkedList([3])

	assertEquals(assert, expect)
	assertEquals(next, expect2)
})

Deno.test("dequeue_one 3", () => {
	const node = linkedList([2, 4])
	const next = node.next
	const assert = dequeue_one(node)
	const expect = linkedList([2])
	const expect2 = linkedList([4])

	assertEquals(assert, expect)
	assertEquals(next, expect2)
})
