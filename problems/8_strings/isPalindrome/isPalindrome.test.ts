import { isPalindrome } from "./isPalindrome.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("isPalindrome 1", () => {
	assertEquals(isPalindrome("a"), true)
})

Deno.test("isPalindrome 2", () => {
	assertEquals(isPalindrome("aa"), true)
})

Deno.test("isPalindrome 3", () => {
	assertEquals(isPalindrome("aba"), true)
})

Deno.test("isPalindrome 4", () => {
	assertEquals(isPalindrome("ab"), false)
})

Deno.test("isPalindrome 5", () => {
	assertEquals(isPalindrome("abc"), false)
})

Deno.test("isPalindrome 6", () => {
	assertEquals(isPalindrome("abca"), false)
})

Deno.test("isPalindrome 7", () => {
	assertEquals(isPalindrome("racecar"), true)
})

Deno.test("isPalindrome 8", () => {
	assertEquals(isPalindrome("taco cat"), true)
})

Deno.test("isPalindrome 9", () => {
	assertEquals(isPalindrome("a man a plan a canal Panama"), true)
})

Deno.test("isPalindrome 10", () => {
	assertEquals(isPalindrome("race a car"), false)
})

Deno.test("isPalindrome 11", () => {
	assertEquals(isPalindrome(" "), true)
})

Deno.test("isPalindrome 12", () => {
	assertEquals(isPalindrome("never odd or even"), true)
})

Deno.test("isPalindrome 13", () => {
	assertEquals(isPalindrome("Eva, can I see bees in a cave?"), true)
})

Deno.test("isPalindrome 14", () => {
	assertEquals(isPalindrome("Sit on a potato pan, Otis."), true)
})
