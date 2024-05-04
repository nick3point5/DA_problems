import { countIslands } from "./countIslands.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("countIslands 1", () => {
	const map1 = [
		[5],
	]

	const result = countIslands(map1)
	const expected = 1

	assertEquals(result, expected)
})

Deno.test("countIslands 2", () => {
	const map2 = [
		[5, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]

	const result = countIslands(map2)
	const expected = 2

	assertEquals(result, expected)
})

Deno.test("countIslands 3", () => {
	const map3 = [
		[4, 1, 0, 1, 1],
		[1, 1, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 2],
	]

	const result = countIslands(map3)
	const expected = 3

	assertEquals(result, expected)
})

Deno.test("countIslands 4", () => {
	const map4 = [
		[0, 0, 0, 0, 0],
		[0, 2, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 3, 1],
	]

	const result = countIslands(map4)
	const expected = 1

	assertEquals(result, expected)
})

Deno.test("countIslands 5", () => {
	const map4 = [
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
	]

	const result = countIslands(map4)
	const expected = 10

	assertEquals(result, expected)
})
