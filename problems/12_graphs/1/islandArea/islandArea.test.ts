import { islandArea } from "./islandArea.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("islandArea 1", () => {
	const map1 = [
		[5],
	]

	const result = islandArea(map1)
	const expected = 1

	assertEquals(result, expected)
})

Deno.test("islandArea 2", () => {
	const map2 = [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]

	const result = islandArea(map2)
	const expected = 3

	assertEquals(result, expected)
})

Deno.test("islandArea 3", () => {
	const map3 = [
		[4, 1, 0, 1, 1],
		[1, 1, 2, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 2],
	]

	const result = islandArea(map3)
	const expected = 12

	assertEquals(result, expected)
})

Deno.test("islandArea 4", () => {
	const map4 = [
		[0, 0, 0, 0, 0],
		[0, 2, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 3, 1],
	]

	const result = islandArea(map4)
	const expected = 6

	assertEquals(result, expected)
})
