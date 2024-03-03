import { linkedList } from "../../4_nodes_list/2/linkedList/linkedList.js"
import { prepend_one } from "./prepend_one.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { Node } from "../../4_nodes_list/1/Node/Node.js"

const testFn = jsonifyFn(prepend_one)

Deno.test("prepend_one 1", () => {
	const node = new Node(1)
	const assert = prepend_one(node, 2)
	const expect = linkedList([2, 1])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})

Deno.test("prepend_one 2", () => {
	const node = new Node(1)
	const assert = prepend_one(node, 3)
	const expect = linkedList([3, 1])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})

Deno.test("prepend_one 3", () => {
	const node = new Node(2)
	const assert = prepend_one(node, 4)
	const expect = linkedList([4, 2])
	assertEquals(JSON.stringify(assert), JSON.stringify(expect))
})
