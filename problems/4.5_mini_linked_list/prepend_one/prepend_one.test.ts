import { prepend_one } from "./prepend_one.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { Node } from "../../4_nodes_list/1/Node/Node.js"
import { jsonifyFn } from "../../../test_utils/jsonifyFn.ts"

const testFn = jsonifyFn(prepend_one)

Deno.test("prepend_one 1", () => {
	const node = new Node(1)
	const assert = testFn(node, 2)
	const expect = {
		value: 2,
		next: {
			value: 1,
			next: null,
		},
	}

	assertEquals(assert, expect)
})

Deno.test("prepend_one 2", () => {
	const node = new Node(1)
	const assert = testFn(node, 3)
	const expect = {
		value: 3,
		next: {
			value: 1,
			next: null,
		},
	}
	assertEquals(assert, expect)
})

Deno.test("prepend_one 3", () => {
	const node = new Node(2)
	const assert = testFn(node, 4)
	const expect = {
		value: 4,
		next: {
			value: 2,
			next: null,
		},
	}
	assertEquals(assert, expect)
})
