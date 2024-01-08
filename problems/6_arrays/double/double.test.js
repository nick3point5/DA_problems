import { double } from "./double.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("double 1", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	assertEquals(double(array), [2, 4, 6, 8, 10, 12, 14, 16, 18])
})

Deno.test("double 2", () => {
	const array = [13]
	assertEquals(double(array), [26])
})

Deno.test("double 3", () => {
	const array = []
	assertEquals(double(array), [])
})

Deno.test("double 4", () => {
	const array = [-1, -2, -3, -4, -5, -6, -7, -8, -9]
	assertEquals(double(array), [-2, -4, -6, -8, -10, -12, -14, -16, -18])
})
