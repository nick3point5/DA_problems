import { jsonifyClass } from "../../../../test_utils/jsonifyClass.ts"
import { TreeNode } from "./TreeNode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"


const testFn = jsonifyClass(TreeNode)

Deno.test("TreeNode 1", () => {
	const assert = testFn(1)
	const expected = {
		value: 1,
		left: null,
		right: null,
	}

	assertEquals(assert, expected)
})

Deno.test("TreeNode 2", () => {
	const assert = testFn(1, testFn(2), null)
	const expected = {
		value: 1,
		left: {
			value: 2,
			left: null,
			right: null,
		},
		right: null,
	}

	assertEquals(assert, expected)
})

Deno.test("TreeNode 3", () => {
	const assert = testFn(1, null, testFn(3))
	const expected = {
		value: 1,
		left: null,
		right: {
			value: 3,
			left: null,
			right: null,
		},
	}

	assertEquals(assert, expected)
})

Deno.test("TreeNode 4", () => {
	const assert = testFn(1, testFn(2), testFn(3))
	const expected = {
		value: 1,
		left: {
			value: 2,
			left: null,
			right: null,
		},
		right: {
			value: 3,
			left: null,
			right: null,
		},
	}

	assertEquals(assert, expected)
})

Deno.test("TreeNode 5", () => {
	const assert = testFn(0, testFn(0), testFn(2))
	const expected = {
		value: 0,
		left: {
			value: 0,
			left: null,
			right: null,
		},
		right: {
			value: 2,
			left: null,
			right: null,
		},
	}

	assertEquals(assert, expected)
})

Deno.test("TreeNode 6", () => {
	const assert = testFn("hello", testFn("world"), testFn(""))
	const expected = {
		value: "hello",
		left: {
			value: "world",
			left: null,
			right: null,
		},
		right: {
			value: "",
			left: null,
			right: null,
		},
	}

	assertEquals(assert, expected)
})


