import { multiply } from "./multiply.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("multiply 1", () => {
	assertEquals(multiply(1, 2), 2)
})

Deno.test("multiply 2", () => {
	assertEquals(multiply(2, 3), 6)
})

Deno.test("multiply 3", () => {
	assertEquals(multiply(3, 4), 12)
})
