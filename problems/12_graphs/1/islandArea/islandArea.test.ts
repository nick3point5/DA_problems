import { islandArea } from "./islandArea.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("islandArea 1", () => {
	assertEquals(islandArea(1), null)
})
