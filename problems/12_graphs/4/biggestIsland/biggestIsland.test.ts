import { biggestIsland as biggestIsland } from "./biggestIsland.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("biggestIsland 1", () => {
	const map1 = [
		[5],
	]

	const result = biggestIsland(map1)
	const expected = 5

	assertEquals(result, expected)
})

Deno.test("biggestIsland 2", () => {
	const map2 = [
		[5, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]

	const result = biggestIsland(map2)
	const expected = 5

	assertEquals(result, expected)
})

Deno.test("biggestIsland 3", () => {
	const map3 = [
		[4, 1, 0, 1, 1],
		[1, 1, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 6, 2],
	]

	const result = biggestIsland(map3)
	const expected = 10

	assertEquals(result, expected)
})

Deno.test("biggestIsland 4", () => {
	const map4 = [
		[0, 0, 0, 0, 0],
		[0, 2, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 3, 1],
	]

	const result = biggestIsland(map4)
	const expected = 9

	assertEquals(result, expected)
})

Deno.test("biggestIsland 5", () => {
	const map4 = [
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
	]

	const result = biggestIsland(map4)
	const expected = 1

	assertEquals(result, expected)
})

Deno.test("biggestIsland 6", () => {
	const map4 = [
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[1, 0, 2, 0, 1],
		[0, 1, 0, 1, 0],
	]

	const result = biggestIsland(map4)
	const expected = 2

	assertEquals(result, expected)
})
