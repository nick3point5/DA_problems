import { letterCount } from "./letterCount.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("letterCount 1", () => {
	const map = letterCount("hello")
	const result = new Map([["h", 1], ["e", 1], ["l", 2], ["o", 1]])
	assertEquals(map, result)
})

Deno.test("letterCount 2", () => {
	const map = letterCount("world")
	const result = new Map([["w", 1], ["o", 1], ["r", 1], ["l", 1], ["d", 1]])
	assertEquals(map, result)
})

Deno.test("letterCount 3", () => {
	const map = letterCount("hello world")
	const result = new Map([
		["h", 1],
		["e", 1],
		["l", 3],
		["o", 2],
		[" ", 1],
		["w", 1],
		["r", 1],
		["d", 1],
	])
	assertEquals(map, result)
})

Deno.test("letterCount 4", () => {
	const map = letterCount("")
	const result = new Map()
	assertEquals(map, result)
})

Deno.test("letterCount 5", () => {
	const map = letterCount("a")
	const result = new Map([["a", 1]])
	assertEquals(map, result)
})

Deno.test("letterCount 6", () => {
	const map = letterCount("abracadabra")
	const result = new Map([
		["a", 5],
		["b", 2],
		["r", 2],
		["c", 1],
		["d", 1],
	])
	assertEquals(map, result)
})
