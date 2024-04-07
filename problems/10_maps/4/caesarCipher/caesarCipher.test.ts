import { caesarCipher } from "./caesarCipher.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("caesarCipher 1", () => {
	assertEquals(caesarCipher("hello", 1), "ifmmp")
})

Deno.test("caesarCipher 2", () => {
	assertEquals(caesarCipher("hello", 3), "khoor")
})

Deno.test("caesarCipher 3", () => {
	assertEquals(caesarCipher("hello", 5), "mjqqt")
})

Deno.test("caesarCipher 4", () => {
	assertEquals(caesarCipher("hello", 26), "hello")
})

Deno.test("caesarCipher 5", () => {
	assertEquals(caesarCipher("hello", 27), "ifmmp")
})
