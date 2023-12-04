import { doublyLinkedList } from "./doublyLinkedList.solution.js"
import { assertEquals, equal } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("doublyLinkedList 1", () => {
	assertEquals(doublyLinkedList([]), null)
})

Deno.test("doublyLinkedList 2", () => {
	equal(
		doublyLinkedList([1]),
		{
			value: 1,
			next: null,
			prev: null,
		},
	)
})

Deno.test("doublyLinkedList 3", () => {
	const node1 = {
		value: 1,
		next: null,
		prev: null,
	}

	const node2 = {
		value: 2,
		next: null,
		prev: null,
	}

	const node3 = {
		value: 3,
		next: null,
		prev: null,
	}

	node1.next = node2
	node2.prev = node1
	node2.next = node3
	node3.prev = node2

	equal(
		doublyLinkedList([1, 2, 3]),
		node1,
	)
})
