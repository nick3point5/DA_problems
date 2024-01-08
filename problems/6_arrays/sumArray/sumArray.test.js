import { sumArray } from "./sumArray.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("sumArray 1", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	assertEquals(sumArray(array), 45)
})

Deno.test("sumArray 2", () => {
	const array = [-1, 2, -3, 4, -5, 6, -7, 8, -9]
	assertEquals(sumArray(array), -5)
})

Deno.test("sumArray 3", () => {
	const array = []
	assertEquals(sumArray(array), 0)
})

Deno.test("sumArray 4", () => {
	const array = [1237]
	assertEquals(sumArray(array), 1237)
})

Deno.test("sumArray 5", () => {
	const array = [1237, 123, 12, 1]
	assertEquals(sumArray(array), 1373)
})
