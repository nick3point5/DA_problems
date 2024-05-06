import { checkerBoard } from "./checkerBoard.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { dirname, fromFileUrl } from "https://deno.land/std/path/mod.ts"

const directory = dirname(import.meta.url)

Deno.test("checkerBoard 1", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result1.txt"))
	const result = checkerBoard(1, 1)

	assertEquals(result, expected)
})

Deno.test("checkerBoard 2", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result2.txt"))
	const result = checkerBoard(1, 3)

	assertEquals(result, expected)
})

Deno.test("checkerBoard 3", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result3.txt"))
	const result = checkerBoard(3, 1)

	assertEquals(result, expected)
})

Deno.test("checkerBoard 4", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result4.txt"))
	const result = checkerBoard(3, 3)

	assertEquals(result, expected)
})

Deno.test("checkerBoard 5", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result5.txt"))
	const result = checkerBoard(10, 10)

	assertEquals(result, expected)
})
