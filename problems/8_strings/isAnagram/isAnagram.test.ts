import { isAnagram } from "./isAnagram.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("isAnagram 1", () => {
	assertEquals(isAnagram("anagram", "nagaram"), true)
})

Deno.test("isAnagram 2", () => {
	assertEquals(isAnagram("rat", "car"), false)
})

Deno.test("isAnagram 3", () => {
	assertEquals(isAnagram("ab", "a"), false)
})

Deno.test("isAnagram 4", () => {
	assertEquals(isAnagram("a", "a"), true)
})

Deno.test("isAnagram 5", () => {
	assertEquals(isAnagram("a", "b"), false)
})

Deno.test("isAnagram 6", () => {
	assertEquals(isAnagram("", ""), true)
})

Deno.test("isAnagram 7", () => {
	assertEquals(isAnagram("", "a"), false)
})

Deno.test("isAnagram 8", () => {
	assertEquals(isAnagram("potato", ""), false)
})

Deno.test("isAnagram 9", () => {
	assertEquals(isAnagram("hello", "leolh"), true)
})
