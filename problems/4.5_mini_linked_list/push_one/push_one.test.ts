import { push_one } from "./push_one.ts"
import { Node } from "../../4_nodes_list/1/Node/Node.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { jsonifyFn } from "../../../test_utils/jsonifyFn.ts"

const testFn = jsonifyFn(push_one)

Deno.test("push_one 1", () => {
	const node = new Node(1)
	const assert = testFn(node, 2)
	const expect = {
		value: 1,
		next: {
			value: 2,
			next: null,
		},
	}
	assertEquals(assert, expect)
})

Deno.test("push_one 2", () => {
	const node = new Node(1)
	const assert = testFn(node, 3)
	const expect = {
		value: 1,
		next: {
			value: 3,
			next: null,
		},
	}
	assertEquals(assert, expect)
})

Deno.test("push_one 3", () => {
	const node = new Node(2)
	const assert = testFn(node, 4)
	const expect = {
		value: 2,
		next: {
			value: 4,
			next: null,
		},
	}
	assertEquals(assert, expect)
})
