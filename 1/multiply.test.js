import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { multiply } from "./multiply.js"

Deno.test("multiply", () => {
	assertEquals(multiply(1, 2), 2)
	assertEquals(multiply(2, 3), 6)
	assertEquals(multiply(3, 4), 12)
})
