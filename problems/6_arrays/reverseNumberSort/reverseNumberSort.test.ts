import { reverseNumberSort } from "./reverseNumberSort.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("reverseNumberSort 1", () => {
	const array = [5, 4, 3, 2, 1, 6, 7, 8, 9]
	assertEquals(reverseNumberSort(array), [9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test("reverseNumberSort 2", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	assertEquals(reverseNumberSort(array), [9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test("reverseNumberSort 3", () => {
	const array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
	assertEquals(reverseNumberSort(array), [9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test("reverseNumberSort 4", () => {
	const array = [6, 7, 1, 1, 3, 3, 7]
	assertEquals(reverseNumberSort(array), [7, 7, 6, 3, 3, 1, 1])
})

Deno.test("reverseNumberSort 5", () => {
	const array = [1]
	assertEquals(reverseNumberSort(array), [1])
})

Deno.test("reverseNumberSort 6", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	assertEquals(reverseNumberSort(array), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})
