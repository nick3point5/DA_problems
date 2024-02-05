import { reverseWords } from "./reverseWords..ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("reverseWords 1", () => {
	assertEquals(reverseWords("hello world"), "world hello")
})

Deno.test("reverseWords 2", () => {
	assertEquals(reverseWords("the sky is blue"), "blue is sky the")
})

Deno.test("reverseWords 3", () => {
	assertEquals(reverseWords("a good example"), "example good a")
})
