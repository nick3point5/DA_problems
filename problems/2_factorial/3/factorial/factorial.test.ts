import { factorial } from "./factorial.js"
import { assertEquals, assertThrows } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("factorial 1", () => {
	assertEquals(factorial(1), 1)
})

Deno.test("factorial 2", () => {
	assertEquals(factorial(2), 2)
})

Deno.test("factorial 3", () => {
	assertEquals(factorial(3), 6)
})

Deno.test("factorial 4", () => {
	assertEquals(factorial(4), 24)
})

Deno.test("factorial 5", () => {
	assertEquals(factorial(5), 120)
})

Deno.test("factorial 6", () => {
	assertThrows(() => factorial(0.5))
})

Deno.test("factorial 7", () => {
	assertThrows(() => factorial(-1))
})

Deno.test("factorial 8", () => {
	assertThrows(() => factorial("a"))
})
