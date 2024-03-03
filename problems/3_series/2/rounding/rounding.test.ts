import { rounding } from "./rounding.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("rounding 1", () => {
	assertEquals(rounding(1), 1)
})

Deno.test("rounding 2", () => {
	assertEquals(rounding(1.5), 2)
})

Deno.test("rounding 3", () => {
	assertEquals(rounding(1.49), 1)
})

Deno.test("rounding 4", () => {
	assertEquals(rounding(1.499, 1), 1.5)
})

Deno.test("rounding 5", () => {
	assertEquals(rounding(1.499, 2), 1.5)
})

Deno.test("rounding 6", () => {
	assertEquals(rounding(1.499, 3), 1.499)
})

Deno.test("rounding 7", () => {
	assertEquals(rounding(1.499, 4), 1.499)
})

Deno.test("rounding 8", () => {
	assertEquals(rounding(1.501, 0), 2)
})

Deno.test("rounding 9", () => {
	assertEquals(rounding(1.501, 1), 1.5)
})

Deno.test("rounding 10", () => {
	assertEquals(rounding(1.501, 2), 1.5)
})

Deno.test("rounding 11", () => {
	assertEquals(rounding(1.501, 3), 1.501)
})

Deno.test("rounding 12", () => {
	assertEquals(rounding(1501, -1), 1500)
})

Deno.test("rounding 13", () => {
	assertEquals(rounding(1501, -2), 1500)
})

Deno.test("rounding 14", () => {
	assertEquals(rounding(1501, -3), 2000)
})
