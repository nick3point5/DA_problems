import { findUnsorted } from "./findUnsorted.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("findUnsorted 1", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findUnsorted(array, 3), 2)
})

Deno.test("findUnsorted 2", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findUnsorted(array, 9), 8)
})

Deno.test("findUnsorted 3", () => {
	const array = [7, 3, 8, 2, 6, 5, 1, 4, 9]

	assertEquals(findUnsorted(array, 4), 7)
})

Deno.test("findUnsorted 4", () => {
	const array = [7, 3, 8, 2, 6, 5, 1, 4, 9]

	assertEquals(findUnsorted(array, 10), -1)
})

Deno.test("findUnsorted 5", () => {
	const array = [7, 3, 8, 2, 6, 5, 1, 4, 9]

	assertEquals(findUnsorted(array, 0), -1)
})

Deno.test("findUnsorted 6", () => {
	const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

	assertEquals(findUnsorted(array, 3), 3)
})

Deno.test("findUnsorted 7", () => {
	const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

	assertEquals(findUnsorted(array, 2), 1)
})

Deno.test("findUnsorted 8", () => {
	const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

	assertEquals(findUnsorted(array, 4), 6)
})
