import { islandPerimeter } from "./islandPerimeter.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("islandPerimeter 1", () => {
	const map1 = [
		[5],
	]

	const result = islandPerimeter(map1)
	const expected = 4

	assertEquals(result, expected)
})

Deno.test("islandPerimeter 2", () => {
	const map2 = [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]

	const result = islandPerimeter(map2)
	const expected = 8

	assertEquals(result, expected)
})

Deno.test("islandPerimeter 3", () => {
	const map3 = [
		[4, 1, 0, 1, 1],
		[1, 1, 2, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 2],
	]

	const result = islandPerimeter(map3)
	const expected = 24

	assertEquals(result, expected)
})

Deno.test("islandPerimeter 4", () => {
	const map4 = [
		[0, 0, 0, 0, 0],
		[0, 2, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 3, 1],
	]

	const result = islandPerimeter(map4)
	const expected = 14

	assertEquals(result, expected)
})
