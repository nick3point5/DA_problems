import { romanNumeralsDecode } from "./romanNumeralsDecode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"


Deno.test("romanNumeralsDecode 1", () => {
	const s = "I"
	const result = 1
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 2", () => {
	const s = "II"
	const result = 2
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 3", () => {
	const s = "V"
	const result = 5
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 4", () => {
	const s = "X"
	const result = 10
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 5", () => {
	const s = "XIV"
	const result = 14
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 6", () => {
	const s = "CXX"
	const result = 120
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 7", () => {
	const s = "CD"
	const result = 400
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 8", () => {
	const s = "D"
	const result = 500
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 9", () => {
	const s = "M"
	const result = 1000
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 10", () => {
	const s = "MCMXCIV"
	const result = 1994
	assertEquals(romanNumeralsDecode(s), result)
})

Deno.test("romanNumeralsDecode 11", () => {
	const s = "MMMCMXCIX"
	const result = 3999
	assertEquals(romanNumeralsDecode(s), result)
})
