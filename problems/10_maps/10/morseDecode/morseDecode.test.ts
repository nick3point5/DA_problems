import { morseDecode } from "./morseDecode.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("morseDecode 1", () => {
	const s = "... --- ..."
	const result = "sos"
	assertEquals(morseDecode(s), result)
})

Deno.test("morseDecode 2", () => {
	const s = ".... . .-.. .--."
	const result = "help"
	assertEquals(morseDecode(s), result)
})

Deno.test("morseDecode 3", () => {
	const s = ".... . .-.. .-.. ---"
	const result = "hello"
	assertEquals(morseDecode(s), result)
})

Deno.test("morseDecode 4", () => {
	const s = ""
	const result = ""
	assertEquals(morseDecode(s), result)
})

Deno.test("morseDecode 5", () => {
	const s = ".-"
	const result = "a"
	assertEquals(morseDecode(s), result)
})

Deno.test("morseDecode 6", () => {
	const s = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
	const result = "hello world"
	assertEquals(morseDecode(s), result)
})
