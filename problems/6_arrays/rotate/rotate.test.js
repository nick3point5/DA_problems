import { rotate } from "./rotate.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("rotate 1", () => {
	const array = [1, 2, 3, 4, 5]
	const n = 2
	assertEquals(rotate(array, n), [4, 5, 1, 2, 3])
})

Deno.test("rotate 2", () => {
	const array = [1, 2, 3, 4, 5]
	const n = 3
	assertEquals(rotate(array, n), [3, 4, 5, 1, 2])
})

Deno.test("rotate 3", () => {
	const array = [1, 2, 3, 4, 5]
	const n = 5
	assertEquals(rotate(array, n), [1, 2, 3, 4, 5])
})

Deno.test("rotate 4", () => {
	const array = []
	const n = 1
	assertEquals(rotate(array, n), [])
})

Deno.test("rotate 5", () => {
	const array = [1]
	const n = 10
	assertEquals(rotate(array, n), [1])
})
