import { addTreeNodes } from "./addTreeNodes.ts"
import { TreeNode } from "../../1/TreeNode/TreeNode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { jsonifyFn } from "../../../../test_utils/jsonifyFn.ts"

const testFn = jsonifyFn(addTreeNodes)

Deno.test("addTreeNodes 1", () => {
	const assert = testFn(new TreeNode(1), [2, 3])
	const expect = {
		value: 1,
		left: { value: 2, left: null, right: null },
		right: { value: 3, left: null, right: null },
	}
	assertEquals(assert, expect)
})

Deno.test("addTreeNodes 2", () => {
	const assert = testFn(new TreeNode(1), [null, 3])
	const expect = {
		value: 1,
		left: null,
		right: { value: 3, left: null, right: null },
	}
	assertEquals(assert, expect)
})

Deno.test("addTreeNodes 3", () => {
	const assert = testFn(new TreeNode(1), [2, null])
	const expect = {
		value: 1,
		left: { value: 2, left: null, right: null },
		right: null,
	}
	assertEquals(assert, expect)
})

Deno.test("addTreeNodes 4", () => {
	const assert = testFn(new TreeNode(1), [null, null])
	const expect = {
		value: 1,
		left: null,
		right: null,
	}
	assertEquals(assert, expect)
})
