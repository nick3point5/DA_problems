import { romanNumerals } from "./romanNumerals.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("romanNumerals 1", () => {
	const num = 1
	const result = "I"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 2", () => {
	const num = 2
	const result = "II"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 3", () => {
	const num = 5
	const result = "V"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 4", () => {
	const num = 10
	const result = "X"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 5", () => {
	const num = 14
	const result = "XIV"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 6", () => {
	const num = 120
	const result = "CXX"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 7", () => {
	const num = 400
	const result = "CD"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 8", () => {
	const num = 500
	const result = "D"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 9", () => {
	const num = 1000
	const result = "M"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 10", () => {
	const num = 1994
	const result = "MCMXCIV"
	assertEquals(romanNumerals(num), result)
})

Deno.test("romanNumerals 11", () => {
	const num = 3999
	const result = "MMMCMXCIX"
	assertEquals(romanNumerals(num), result)
})
