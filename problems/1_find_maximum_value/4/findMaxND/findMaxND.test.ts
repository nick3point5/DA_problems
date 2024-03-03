import { findMaxND } from "./findMaxND.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("findMaxND 1", () => {
	assertEquals(findMaxND([5, 8, 9, 3, 10, 2, 6, 7, 12, 4, 11, 1]), 12)
})

Deno.test("findMaxND 2", () => {
	assertEquals(findMaxND([[5, 8, 9], [3, 10, 2], [6, 7, 12], [4, 11, 1]]), 12)
})

Deno.test("findMaxND 3", () => {
	assertEquals(findMaxND([[5], [8], [9], [3], [10], [2], [6], [7], [12], [4], [11], [1]]), 12)
})

Deno.test("findMaxND 4", () => {
	assertEquals(findMaxND([[[5, 8], [9, 3]], [[10, 2], [6, 7]], [[12, 4], [11, 1]]]), 12)
})

Deno.test("findMaxND 5", () => {
	assertEquals(findMaxND([[[[5], [8]], [[9], [3]]], [[[10], [2]], [[6], [7]]], [[[12], [4]], [[11], [1]]]]), 12)
})

Deno.test("findMaxND 6", () => {
	assertEquals(
		findMaxND([
			[[[[5]]]],
			[[[[8]]]],
			[[[[[9]]]]],
			[[[[[3]]]]],
			[[[[[10]]]]],
			[[[[[2]]]]],
			[[[[[6]]]]],
			[[[[[7]]]]],
			[[[[[12]]]]],
			[[[[[4]]]]],
			[[[[[11]]]]],
			[[[[[1]]]]],
		]),
		12,
	)
})

Deno.test("findMaxND 7", () => {
	assertEquals(findMaxND([5, 8, [9, 3, 10, 2, 6, 7, 12, 4, 11, 1]]), 12)
})

Deno.test("findMaxND 8", () => {
	assertEquals(findMaxND([[[5, 8, 9], [3, 10, 2], [6, 7, [12]], [4, 11, 1]]]), 12)
})

Deno.test("findMaxND 9", () => {
	assertEquals(findMaxND([[[[5, 8], [9, 3]], [[10, 2], [6, 7]], [[12, 4], [11, 1], []]]]), 12)
})

Deno.test("findMaxND 10", () => {
	assertEquals(findMaxND([[[[5, 8], [9, 3]], [[10, 2], [6, 7]], [[12, 4], [11, 1], []]]]), 12)
})

Deno.test("findMaxND 11", () => {
	assertEquals(findMaxND([[5], [8], [9], [3], [10], [2], [6], [7], [12], [4], [11], [1]]), 12)
})

Deno.test("findMaxND 12", () => {
	assertEquals(findMaxND([]), null)
})
