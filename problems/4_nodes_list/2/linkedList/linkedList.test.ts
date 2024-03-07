import { linkedList } from "./linkedList.ts"
import { Node } from "../../1/Node/Node.ts"

import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("linkedList 1", () => {
	assertEquals(linkedList([]), null)
})

Deno.test("linkedList 2", () => {
	assertEquals(
		linkedList([1]),
		new Node(1),
	)
})

Deno.test("linkedList 3", () => {
	assertEquals(
		linkedList([1, 2, 3]),
		new Node(1, new Node(2, new Node(3))),
	)
})

Deno.test("linkedList 4", () => {
	assertEquals(
		linkedList([234, 22, 35]),
		new Node(234, new Node(22, new Node(35))),
	)
})
