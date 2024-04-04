import { morseCode } from "./morseCode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("morseCode 1", () => {
	const s = "sos"
	const result = "... --- ..."
	assertEquals(morseCode(s), result)
})

Deno.test("morseCode 2", () => {
	const s = "SOS"
	const result = "... --- ..."
	assertEquals(morseCode(s), result)
})

Deno.test("morseCode 3", () => {
	const s = "hello"
	const result = ".... . .-.. .-.. ---"
	assertEquals(morseCode(s), result)
})

Deno.test("morseCode 4", () => {
	const s = ""
	const result = ""
	assertEquals(morseCode(s), result)
})

Deno.test("morseCode 5", () => {
	const s = "a"
	const result = ".-"
	assertEquals(morseCode(s), result)
})

Deno.test("morseCode 6", () => {
	const s = "hello world"
	const result = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
	assertEquals(morseCode(s), result)
})
