import { wordSearch1D } from "./wordSearch1D.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
/**
 * A function that searches for a word in a 1D board.
 *
 * @param {string} board - the 1D board to search in
 * @param {string} word - the word to search for
 * @return {number} the index of the word in the board, -1 if not found
 * @example
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "world") = 6
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "hello") = 0
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "foo") = -1
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "") = -1
 */ 
Deno.test("wordSearch1D 1", () => {
	const board = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
	const word = "world"
	assertEquals(wordSearch1D(board, word), 6)
})

Deno.test("wordSearch1D 2", () => {
	const board = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
	const word = "hello"
	assertEquals(wordSearch1D(board, word), 0)
})

Deno.test("wordSearch1D 3", () => {
	const board = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
	const word = "foo"
	assertEquals(wordSearch1D(board, word), -1)
})

Deno.test("wordSearch1D 4", () => {
	const board = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
	const word = ""
	assertEquals(wordSearch1D(board, word), -1)
})

Deno.test("wordSearch1D 5", () => {
	const board = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "z", "e", "q", "q", "o"]
	const word = "world"
	assertEquals(wordSearch1D(board, word), 6)
})
