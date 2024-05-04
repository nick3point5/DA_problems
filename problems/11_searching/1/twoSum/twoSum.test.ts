import { twoSum } from "./twoSum.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("twoSum 1", () => {
	const array = [2, 7, 11, 15]
	const result = [0, 1]

	assertEquals(twoSum(array, 9)?.sort(), result.sort())
})

Deno.test("twoSum 2", () => {
	const array = [3, 2, 4]
	const result = [1, 2]

	assertEquals(twoSum(array, 6)?.sort(), result.sort())
})

Deno.test("twoSum 3", () => {
	const array = [3, 3]
	const result = [0, 1]

	assertEquals(twoSum(array, 6)?.sort(), result.sort())
})

Deno.test("twoSum 4", () => {
	const array = [2, 7, 11, 15]
	const result = null

	assertEquals(twoSum(array, 10), result)
})

Deno.test("twoSum 5", () => {
	const array = [-3, 4, 3, 90]
	const result = [0, 2]

	assertEquals(twoSum(array, 0), result)
})

Deno.test("twoSum 6", () => {
	const array = [-3, 4, 3, 90]
	const result = [1, 3]

	assertEquals(twoSum(array, 94), result)
})
