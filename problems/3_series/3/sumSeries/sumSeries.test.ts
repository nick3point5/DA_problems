import { sumSeries } from "./sumSeries.ts"
import { assertEquals, assertThrows } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("sumSeries 1", () => {
	assertEquals(sumSeries(0), 0)
})

Deno.test("sumSeries 2", () => {
	assertEquals(sumSeries(1), 1)
})

Deno.test("sumSeries 3", () => {
	assertEquals(sumSeries(5), 15)
})

Deno.test("sumSeries 4", () => {
	assertEquals(sumSeries(100), 5050)
})

Deno.test("sumSeries 5", () => {
	assertEquals(sumSeries(2548), 3247426)
})

Deno.test("sumSeries 6", () => {
	assertThrows(() => sumSeries(0.5))
})

Deno.test("sumSeries 7", () => {
	assertThrows(() => sumSeries(-1))
})

Deno.test("sumSeries 8", () => {
	assertThrows(() => sumSeries("a"))
})
