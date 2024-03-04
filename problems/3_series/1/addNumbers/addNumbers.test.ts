import { addNumbers } from "./addNumbers.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("addNumbers 1", () => {
	assertEquals(addNumbers(1, 1), 2)
})

Deno.test("addNumbers 2", () => {
	assertEquals(addNumbers(2, 1), 3)
})

Deno.test("addNumbers 3", () => {
	assertEquals(addNumbers(1037, 2478), 3515)
})

Deno.test("addNumbers 4", () => {
	assertEquals(addNumbers(-30, 24), -6)
})
