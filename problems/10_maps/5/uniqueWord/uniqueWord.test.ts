import { uniqueWord } from "./uniqueWord.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("uniqueWord 1", () => {
	const s = "hello world world"
	const result = "hello"
	assertEquals(uniqueWord(s), result)
})

Deno.test("uniqueWord 2", () => {
	const s = "hello"
	const result = "hello"
	assertEquals(uniqueWord(s), result)
})

Deno.test("uniqueWord 3", () => {
	const s = "hello hello world"
	const result = "world"
	assertEquals(uniqueWord(s), result)
})

Deno.test("uniqueWord 4", () => {
	const s = "foo bar foo baz foo bar"
	const result = "baz"
	assertEquals(uniqueWord(s), result)
})
