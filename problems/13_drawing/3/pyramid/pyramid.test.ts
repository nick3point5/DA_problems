import { pyramid } from "./pyramid.solution.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("pyramid 1", () => {
	const result = pyramid(1)
	const expected = "#\n"
	assertEquals(result, expected)
})

Deno.test("pyramid 2", () => {
	const result = pyramid(2)
	const expected = " # \n###\n"
	assertEquals(result, expected)
})

Deno.test("pyramid 3", () => {
	const result = pyramid(3)
	const expected = "  #  \n ### \n#####\n"
	assertEquals(result, expected)
})

Deno.test("pyramid 4", () => {
	const result = pyramid(4)
	const expected = "   #   \n  ###  \n ##### \n#######\n"
	assertEquals(result, expected)
})

Deno.test("pyramid 5", () => {
	const result = pyramid(5)
	const expected = "    #    \n   ###   \n  #####  \n ####### \n#########\n"
	assertEquals(result, expected)
})
