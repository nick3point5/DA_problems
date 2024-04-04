import { isAnagram } from "./isAnagram.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("isAnagram 1", () => {
	const str1 = "listen"
	const str2 = "silent"
	assertEquals(isAnagram(str1, str2), true)
})

Deno.test("isAnagram 2", () => {
	const str1 = "hello"
	const str2 = "world"
	assertEquals(isAnagram(str1, str2), false)
})

Deno.test("isAnagram 3", () => {
	const str1 = "hello"
	const str2 = "hell"
	assertEquals(isAnagram(str1, str2), false)
})

Deno.test("isAnagram 4", () => {
	const str1 = "hello"
	const str2 = "leolh"
	assertEquals(isAnagram(str1, str2), true)
})
