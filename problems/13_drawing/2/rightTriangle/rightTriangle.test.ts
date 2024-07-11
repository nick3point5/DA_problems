import { rightTriangle } from "./rightTriangle.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("rightTriangle 1", () => {
	const result = rightTriangle(1)
	const expected = "#\n"
	assertEquals(result, expected)
})

Deno.test("rightTriangle 2", () => {
	const result = rightTriangle(2)
	const expected = "#\n##\n"
	assertEquals(result, expected)
})

Deno.test("rightTriangle 3", () => {
	const result = rightTriangle(3)
	const expected = "#\n##\n###\n"
	assertEquals(result, expected)
})

Deno.test("rightTriangle 4", () => {
	const result = rightTriangle(4)
	const expected = "#\n##\n###\n####\n"
	assertEquals(result, expected)
})

Deno.test("rightTriangle 5", () => {
	const result = rightTriangle(5)
	const expected = "#\n##\n###\n####\n#####\n"
	assertEquals(result, expected)
})
