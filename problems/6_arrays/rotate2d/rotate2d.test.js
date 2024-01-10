import { rotate2d } from "./rotate2d.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("rotate2d 1", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const result = [
		[7, 4, 1],
		[8, 5, 2],
		[9, 6, 3],
	]

	assertEquals(rotate2d(matrix, 1), result)
})

Deno.test("rotate2d 2", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const result = [
		[9, 8, 7],
		[6, 5, 4],
		[3, 2, 1],
	]

	assertEquals(rotate2d(matrix, 2), result)
})

Deno.test("rotate2d 3", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const result = [
		[3, 6, 9],
		[2, 5, 8],
		[1, 4, 7],
	]

	assertEquals(rotate2d(matrix, 3), result)
})

Deno.test("rotate2d 4", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const result = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	assertEquals(rotate2d(matrix, 4), result)
})

Deno.test("rotate2d 5", () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]

	const result = [
		[7, 4, 1],
		[8, 5, 2],
		[9, 6, 3],
	]

	assertEquals(rotate2d(matrix, 5), result)
})

Deno.test("rotate2d 6", () => {
	const matrix = [
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	]

	const result = [
		[15, 13, 2, 5],
		[14, 3, 4, 1],
		[12, 6, 8, 9],
		[16, 7, 10, 11],
	]

	assertEquals(rotate2d(matrix, 1), result)
})
