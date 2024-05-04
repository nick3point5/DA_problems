import { find2D } from "./find2D.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("find2D 1", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 5), [1, 1])
})

Deno.test("find2D 2", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 10), null)
})

Deno.test("find2D 3", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 1), [0, 0])
})

Deno.test("find2D 4", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 9), [2, 2])
})

Deno.test("find2D 5", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 8), [2, 1])
})

Deno.test("find2D 6", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 7), [2, 0])
})

Deno.test("find2D 7", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 6), [1, 2])
})

Deno.test("find2D 8", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(find2D(matrix, 3), [0, 2])
})
