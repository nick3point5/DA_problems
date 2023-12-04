import { uniformInvestmentCalculator } from "./uniformInvestmentCalculator.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("uniformInvestmentCalculator 1", () => {
	assertEquals(uniformInvestmentCalculator(1, 2, 0.1, 1), 3.1)
})

Deno.test("uniformInvestmentCalculator 2", () => {
	assertEquals(uniformInvestmentCalculator(1, 0, 0.11, 1), 1.11)
})

Deno.test("uniformInvestmentCalculator 3", () => {
	assertEquals(uniformInvestmentCalculator(23, 3, 0.115, 1), 28.65)
})

Deno.test("uniformInvestmentCalculator 4", () => {
	assertEquals(uniformInvestmentCalculator(250, 50, 0.1, 5), 707.88)
})

Deno.test("uniformInvestmentCalculator 5", () => {
	assertEquals(uniformInvestmentCalculator(0, 100, 0.07, 50), 40652.89)
})
