import { interestCalculator } from "./interestCalculator.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("interestCalculator 1", () => {
	assertEquals(interestCalculator(1, 0.1, 1), 1.1)
})

Deno.test("interestCalculator 2", () => {
	assertEquals(interestCalculator(1, 0.11, 1), 1.11)
})

Deno.test("interestCalculator 3", () => {
	assertEquals(interestCalculator(1, 0.115, 1), 1.12)
})

Deno.test("interestCalculator 4", () => {
	assertEquals(interestCalculator(250, 0.1, 5), 402.63)
})

Deno.test("interestCalculator 5", () => {
	assertEquals(interestCalculator(235, 0.32, 40), 15632380.25)
})
