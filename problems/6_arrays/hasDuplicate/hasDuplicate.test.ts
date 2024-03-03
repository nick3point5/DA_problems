import { hasDuplicate } from "./hasDuplicate.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("hasDuplicate 1", () => {
	const array = [1, 2, 3, 4, 5]
	assertEquals(hasDuplicate(array), false)
})

Deno.test("hasDuplicate 2", () => {
	const array = [1, 2, 3, 4, 5, 2]
	assertEquals(hasDuplicate(array), true)
})

Deno.test("hasDuplicate 3", () => {
	const array = []
	assertEquals(hasDuplicate(array), false)
})

Deno.test("hasDuplicate 4", () => {
	const array = [1]
	assertEquals(hasDuplicate(array), false)
})

Deno.test("hasDuplicate 5", () => {
	const array = [1, 1]
	assertEquals(hasDuplicate(array), true)
})
