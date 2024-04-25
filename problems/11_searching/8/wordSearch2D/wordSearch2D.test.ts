import { wordSearch2D } from "./wordSearch2D.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("wordSearch2D 1", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]
	assertEquals(wordSearch2D(board, "SEE"), null)
})

Deno.test("wordSearch2D 2", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]

	assertEquals(wordSearch2D(board, "CAT"), [1, 2])
})

Deno.test("wordSearch2D 3", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]

	assertEquals(wordSearch2D(board, "ADAM"), [2, 0])
})

Deno.test("wordSearch2D 4", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]

	assertEquals(wordSearch2D(board, "BOW"), [0, 1])
})

Deno.test("wordSearch2D 5", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]

	assertEquals(wordSearch2D(board, "OWN"), null)
})

Deno.test("wordSearch2D 6", () => {
	const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]

	assertEquals(wordSearch2D(board, "TEE"), null)
})
