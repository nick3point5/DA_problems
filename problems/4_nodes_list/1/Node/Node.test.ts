import { Node } from "./Node.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("Node 1", () => {
	const node = new Node(1)
	assertEquals(node.value, 1)
	assertEquals(node.next, null)
})

Deno.test("Node 2", () => {
	const head = new Node(1, new Node(2, new Node(3)))

	assertEquals(head.value, 1)
	assertEquals(head.next!.value, 2)
	assertEquals(head.next!.next!.value, 3)
	assertEquals(head.next!.next!.next, null)
})
