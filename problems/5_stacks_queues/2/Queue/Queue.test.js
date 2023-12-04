import { Queue } from "./Queue.solution.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("Queue 1", () => {
	const queue = new Queue()
	assertEquals(queue.dequeue(), null)
})

Deno.test("Queue 2", () => {
	const queue = new Queue()
	queue.enqueue(1)
	assertEquals(queue.dequeue(), 1)
	assertEquals(queue.dequeue(), null)
})

Deno.test("Queue 3", () => {
	const queue = new Queue()
	queue.enqueue(1)
	queue.enqueue(2)
	assertEquals(queue.dequeue(), 1)
	assertEquals(queue.dequeue(), 2)
	assertEquals(queue.dequeue(), null)
})

Deno.test("Queue 4", () => {
	const queue = new Queue()
	queue.enqueue(3)
	queue.enqueue(1)
	queue.enqueue(2)
	assertEquals(queue.dequeue(), 3)
	assertEquals(queue.dequeue(), 1)
	assertEquals(queue.dequeue(), 2)
	assertEquals(queue.dequeue(), null)
})

Deno.test("Queue 5", () => {
	const queue = new Queue()
	queue.enqueue(2)
	queue.enqueue(2)
	queue.enqueue(2)
	assertEquals(queue.dequeue(), 2)
	assertEquals(queue.dequeue(), 2)
	assertEquals(queue.dequeue(), 2)
	assertEquals(queue.dequeue(), null)
})
