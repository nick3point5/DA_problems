import { doublyLinkedList, Node } from "./doublyLinkedList.ts"
import { assertEquals, equal } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("doublyLinkedList 1", () => {
	assertEquals(doublyLinkedList([]), null)
})

Deno.test("doublyLinkedList 2", () => {
	assertEquals(
		doublyLinkedList([1]),
		new Node(1),
	)
})

Deno.test("doublyLinkedList 3", () => {
	const node1 = new Node(1)
	const node2 = new Node(2)
	const node3 = new Node(3)

	node1.next = node2
	node2.prev = node1
	node2.next = node3
	node3.prev = node2

	assertEquals(
		doublyLinkedList([1, 2, 3]),
		node1,
	)
})
