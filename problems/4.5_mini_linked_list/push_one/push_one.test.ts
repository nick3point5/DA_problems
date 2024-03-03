import { push_one } from "./push_one.ts"
import { Node } from "../../4_nodes_list/1/Node/Node.js"
import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("push_one 1", () => {
	const node = new Node(1)
	const assert = push_one(node, 2)
	const expect = linkedList([1, 2])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})

Deno.test("push_one 2", () => {
	const node = new Node(1)
	const assert = push_one(node, 3)
	const expect = linkedList([1, 3])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})

Deno.test("push_one 3", () => {
	const node = new Node(2)
	const assert = push_one(node, 4)
	const expect = linkedList([2, 4])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})
