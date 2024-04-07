import { wordPattern } from "./wordPattern.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("wordPattern 1", () => {
	const pattern = "abba"
	const words = "dog cat cat dog"
	const result = true
	assertEquals(wordPattern(pattern, words), result)
})

Deno.test("wordPattern 2", () => {
	const pattern = "abba"
	const words = "dog cat cat fish"
	const result = false
	assertEquals(wordPattern(pattern, words), result)
})

Deno.test("wordPattern 3", () => {
	const pattern = "aaaa"
	const words = "dog cat cat dog"
	const result = false
	assertEquals(wordPattern(pattern, words), result)
})

Deno.test("wordPattern 4", () => {
	const pattern = "abba"
	const words = "dog dog dog dog"
	const result = false
	assertEquals(wordPattern(pattern, words), result)
})

Deno.test("wordPattern 5", () => {
	const pattern = "aaaa"
	const words = "dog dog dog dog"
	const result = true
	assertEquals(wordPattern(pattern, words), result)
})
