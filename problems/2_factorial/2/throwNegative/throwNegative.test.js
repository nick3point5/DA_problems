import { throwNegative } from "./throwNegative.js"
import { assertEquals, assertThrows } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("throwNegative 1", () => {
	assertEquals(throwNegative(1), 1)
})

Deno.test("throwNegative 2", () => {
	assertEquals(throwNegative(0), 0)
})

Deno.test("throwNegative 3", () => {
	assertThrows(() => throwNegative(-1))
})

Deno.test("throwNegative 4", () => {
	assertThrows(() => throwNegative(3.5))
})
