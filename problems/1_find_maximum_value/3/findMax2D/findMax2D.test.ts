import { findMax2D } from "./findMax2D.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("findMax2D 1", () => {
	assertEquals(findMax2D([[]]), null)
})

Deno.test("findMax2D 2", () => {
	assertEquals(findMax2D([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 9)
})

Deno.test("findMax2D 3", () => {
	assertEquals(findMax2D([[9, 8, 7], [6, 5, 4], [3, 2, 1]]), 9)
})

Deno.test("findMax2D 4", () => {
	assertEquals(findMax2D([[5, 8, 2], [3, 9, 6], [7, 1, 4]]), 9)
})
