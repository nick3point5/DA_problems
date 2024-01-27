import { countWords } from "./countWords.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("countWords", () => {
	const str = "This is a string"
	assertEquals(countWords(str), 4)
})

Deno.test("countWords", () => {
	const str = "This is a string with spaces"
	assertEquals(countWords(str), 6)
})

Deno.test("countWords", () => {
	const str = "hello"
	assertEquals(countWords(str), 1)
})

Deno.test("countWords", () => {
	const str = ""
	assertEquals(countWords(str), 0)
})

Deno.test("countWords", () => {
	const str =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non? Enim velit commodi doloribus tenetur libero aspernatur dicta voluptatem sequi sunt nesciunt ipsa, praesentium vero beatae odit assumenda sint ipsam."

	assertEquals(countWords(str), 30)
})
