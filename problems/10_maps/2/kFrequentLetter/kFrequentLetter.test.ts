import { kFrequentLetter } from "./kFrequentLetter.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("kFrequentLetter 1", () => {
	const s = "hello"
	const k = 1
	const result = "l"
	assertEquals(kFrequentLetter(s, k), result)
})

Deno.test("kFrequentLetter 2", () => {
	const s = "1223334444"
	const k = 2
	const result = "3"
	assertEquals(kFrequentLetter(s, k), result)
})

Deno.test("kFrequentLetter 3", () => {
	const s = "1223334444"
	const k = 4
	const result = "1"
	assertEquals(kFrequentLetter(s, k), result)
})

Deno.test("kFrequentLetter 4", () => {
	const s = "cheesy beans"
	const k = 1
	const result = "e"
	assertEquals(kFrequentLetter(s, k), result)
})

Deno.test("kFrequentLetter 5", () => {
	const s = "cheesy beans"
	const k = 2
	const result = "s"
	assertEquals(kFrequentLetter(s, k), result)
})
