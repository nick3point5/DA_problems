import { concatArray } from "./concatArray.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("concatArray 1", () => {
	const array1 = [1, 2, 3]
	const array2 = [4, 5, 6]
	assertEquals(concatArray(array1, array2), [1, 2, 3, 4, 5, 6])
	assertEquals(array1, [1, 2, 3])
	assertEquals(array2, [4, 5, 6])
})

Deno.test("concatArray 2", () => {
	const array1 = [1, 2, 3, 4, 5]
	const array2 = [6]
	assertEquals(concatArray(array1, array2), [1, 2, 3, 4, 5, 6])
	assertEquals(array1, [1, 2, 3, 4, 5])
	assertEquals(array2, [6])
})

Deno.test("concatArray 3", () => {
	const array1 = [1]
	const array2 = [2, 3, 4, 5, 6]
	assertEquals(concatArray(array1, array2), [1, 2, 3, 4, 5, 6])
	assertEquals(array1, [1])
	assertEquals(array2, [2, 3, 4, 5, 6])
})

Deno.test("concatArray 4", () => {
	const array1 = []
	const array2 = [2, 3, 4, 5, 6]
	assertEquals(concatArray(array1, array2), [2, 3, 4, 5, 6])
	assertEquals(array1, [])
	assertEquals(array2, [2, 3, 4, 5, 6])
})

Deno.test("concatArray 5", () => {
	const array1 = [1, 2, 3, 4, 5]
	const array2 = []
	assertEquals(concatArray(array1, array2), [1, 2, 3, 4, 5])
	assertEquals(array1, [1, 2, 3, 4, 5])
	assertEquals(array2, [])
})

Deno.test("concatArray 6", () => {
	const array1 = []
	const array2 = []
	assertEquals(concatArray(array1, array2), [])
	assertEquals(array1, [])
	assertEquals(array2, [])
})
