import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { addOne } from "./addOne.js";

Deno.test("addOne", () => {
	assertEquals(addOne(1), 2);
	assertEquals(addOne(2), 3);
	assertEquals(addOne(3), 4);
});