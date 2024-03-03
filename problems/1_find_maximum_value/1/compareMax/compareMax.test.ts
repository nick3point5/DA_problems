import { compareMax } from "./compareMax.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("compareMax 1", () => {
	assertEquals(compareMax(1, 2), 2)
})

Deno.test("compareMax 2", () => {
	assertEquals(compareMax(2, 3), 3)
})

Deno.test("compareMax 3", () => {
	assertEquals(compareMax(3, 4), 4)
})

Deno.test("compareMax 4", () => {
	assertEquals(compareMax(5, 1), 5)
})

Deno.test("compareMax 5", () => {
	assertEquals(compareMax(5, 5), 5)
})
