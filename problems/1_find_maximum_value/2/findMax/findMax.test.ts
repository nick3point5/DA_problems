import { findMax } from "./findMax.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("findMax 1", () => {
	assertEquals(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]), 9)
})

Deno.test("findMax 2", () => {
	assertEquals(findMax([9, 8, 7, 6, 5, 4, 3, 2, 1]), 9)
})

Deno.test("findMax 3", () => {
	assertEquals(findMax([5, 8, 9, 3, 2, 6, 7, 1, 4]), 9)
})

Deno.test("findMax 4", () => {
	assertEquals(findMax([]), null)
})
