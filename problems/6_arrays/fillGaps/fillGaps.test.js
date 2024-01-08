import { fillGaps } from "./fillGaps.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("fillGaps 1", () => {
	const array = [1, 2, 3, 4, 5, 6]
	assertEquals(fillGaps(array), [1, 2, 3, 4, 5, 6])
})

Deno.test("fillGaps 2", () => {
	const array = [1, 2, 3, 5, 6]
	assertEquals(fillGaps(array), [1, 2, 3, 4, 5, 6])
})

Deno.test("fillGaps 3", () => {
	const array = [1, 6]
	assertEquals(fillGaps(array), [1, 2, 3, 4, 5, 6])
})

Deno.test("fillGaps 4", () => {
	const array = []
	assertEquals(fillGaps(array), [])
})

Deno.test("fillGaps 5", () => {
	const array = [1]
	assertEquals(fillGaps(array), [1])
})
