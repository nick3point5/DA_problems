import { reverseString6 as reverseString } from "./reverseString.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("reverseString 1", () => {
	assertEquals(reverseString("hello"), "olleh")
})

Deno.test("reverseString 2", () => {
	assertEquals(reverseString("hello world"), "dlrow olleh")
})

Deno.test("reverseString 3", () => {
	assertEquals(reverseString("a"), "a")
})

Deno.test("reverseString 4", () => {
	assertEquals(reverseString(""), "")
})
