import { square3 as square } from "./square.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("square 1", () => {
	const result = square(1)
	const expected = "#\n"
	assertEquals(result, expected)
})

Deno.test("square 2", () => {
	const result = square(2)
	const expected = "##\n##\n"
	assertEquals(result, expected)
})

Deno.test("square 3", () => {
	const result = square(3)
	const expected = "###\n###\n###\n"
	assertEquals(result, expected)
})

Deno.test("square 4", () => {
	const result = square(4)
	const expected = "####\n####\n####\n####\n"
	assertEquals(result, expected)
})

Deno.test("square 5", () => {
	const result = square(5)
	const expected = "#####\n#####\n#####\n#####\n#####\n"
	assertEquals(result, expected)
})
