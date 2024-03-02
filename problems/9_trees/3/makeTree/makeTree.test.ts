import { makeTree, NestedArray } from "./makeTree.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { jsonifyFn } from "../../../../test_utils/jsonifyFn.ts"


const testFn = jsonifyFn(makeTree)

Deno.test("makeTree 1", () => {
	const array: NestedArray = [1, [null, null]]
	const result = {
		value: 1,
		left: null,
		right: null,
	}
	
	assertEquals(testFn(array), result)
})

Deno.test("makeTree 2", () => {
	const array: NestedArray = [1, [[2, [null, null]], null]]
	const result = {
		value: 1,
		left: {
			value: 2,
			left: null,
			right: null
		},
		right: null,
	}
	
	assertEquals(testFn(array), result)
})

Deno.test("makeTree 3", () => {
	const array: NestedArray = [1, [null, [3, [null, null]]]]
	const result = {
		value: 1,
		left: null,
		right: {
			value: 3,
			left: null,
			right: null
		},
	}
	
	assertEquals(testFn(array), result)
})

Deno.test("makeTree 3", () => {
	const array: NestedArray = [1, [[2, [null, null]], [3, [null, null]]]]
	const result = {
		value: 1,
		left: {
			value: 2,
			left: null,
			right: null
		},
		right: {
			value: 3,
			left: null,
			right: null
		},
	}
	
	assertEquals(testFn(array), result)
})

Deno.test("makeTree 4", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], [4, [null, null]]]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const result = {
		value: 1,
		left: {
			value: 2,
			left: {
				value: 3,
				left: null,
				right: null
			},
			right: {
				value: 4,
				left: null,
				right: null
			}
		},
		right: {
			value: 5,
			left: {
				value: 6,
				left: null,
				right: null
			},
			right: {
				value: 7,
				left: null,
				right: null
			}
		}
	}
	assertEquals(testFn(array), result)
})

Deno.test("makeTree 5", () => {
	const array: NestedArray = [1, [[2, [[3, [null, null]], null]], [5, [[6, [null, null]], [7, [null, null]]]]]]
	const result = {
		value: 1,
		left: {
			value: 2,
			left: {
				value: 3,
				left: null,
				right: null
			},
			right: null
		},
		right: {
			value: 5,
			left: {
				value: 6,
				left: null,
				right: null
			},
			right: {
				value: 7,
				left: null,
				right: null
			}
		}
	}
	assertEquals(testFn(array), result)
})
