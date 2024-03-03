import { DoubleEndedQueue } from "./DoubleEndedQueue.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("DoubleEndedQueue 1", () => {
	const dequeue = new DoubleEndedQueue()
	assertEquals(dequeue.shift(), null)
	assertEquals(dequeue.pop(), null)
})

Deno.test("DoubleEndedQueue 2", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.unshift(1)
	assertEquals(dequeue.shift(), 1)
	assertEquals(dequeue.shift(), null)
})

Deno.test("DoubleEndedQueue 3", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.unshift(1)
	dequeue.unshift(2)
	assertEquals(dequeue.shift(), 2)
	assertEquals(dequeue.shift(), 1)
	assertEquals(dequeue.shift(), null)
})

Deno.test("DoubleEndedQueue 4", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.unshift(3)
	dequeue.unshift(1)
	dequeue.unshift(2)
	assertEquals(dequeue.shift(), 2)
	assertEquals(dequeue.shift(), 1)
	assertEquals(dequeue.shift(), 3)
	assertEquals(dequeue.shift(), null)
})

Deno.test("DoubleEndedQueue 5", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.push(1)
	assertEquals(dequeue.pop(), 1)
	assertEquals(dequeue.pop(), null)
})

Deno.test("DoubleEndedQueue 6", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.push(1)
	dequeue.push(2)
	assertEquals(dequeue.pop(), 2)
	assertEquals(dequeue.pop(), 1)
	assertEquals(dequeue.pop(), null)
})

Deno.test("DoubleEndedQueue 7", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.push(3)
	dequeue.push(1)
	dequeue.push(2)
	assertEquals(dequeue.pop(), 2)
	assertEquals(dequeue.pop(), 1)
	assertEquals(dequeue.pop(), 3)
	assertEquals(dequeue.pop(), null)
})

Deno.test("DoubleEndedQueue 8", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.push(3)
	dequeue.push(1)
	dequeue.push(2)
	assertEquals(dequeue.pop(), 2)
	assertEquals(dequeue.pop(), 1)
	assertEquals(dequeue.pop(), 3)
	assertEquals(dequeue.pop(), null)
})

Deno.test("DoubleEndedQueue 9", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.push(1)
	dequeue.push(2)
	dequeue.push(3)
	dequeue.push(4)
	dequeue.push(5)
	dequeue.push(6)
	dequeue.push(7)
	dequeue.push(8)
	dequeue.push(9)
	dequeue.push(10)

	assertEquals(dequeue.pop(), 10)
	assertEquals(dequeue.pop(), 9)
	assertEquals(dequeue.pop(), 8)
	assertEquals(dequeue.pop(), 7)
	assertEquals(dequeue.pop(), 6)

	assertEquals(dequeue.shift(), 1)
	assertEquals(dequeue.shift(), 2)
	assertEquals(dequeue.shift(), 3)
	assertEquals(dequeue.shift(), 4)
	assertEquals(dequeue.shift(), 5)

	assertEquals(dequeue.pop(), null)
	assertEquals(dequeue.shift(), null)
})

Deno.test("DoubleEndedQueue 10", () => {
	const dequeue = new DoubleEndedQueue()
	dequeue.unshift(1)
	dequeue.unshift(2)
	dequeue.unshift(3)
	dequeue.unshift(4)
	dequeue.unshift(5)
	dequeue.unshift(6)
	dequeue.unshift(7)
	dequeue.unshift(8)
	dequeue.unshift(9)
	dequeue.unshift(10)

	assertEquals(dequeue.pop(), 1)
	assertEquals(dequeue.pop(), 2)
	assertEquals(dequeue.pop(), 3)
	assertEquals(dequeue.pop(), 4)
	assertEquals(dequeue.pop(), 5)

	assertEquals(dequeue.shift(), 10)
	assertEquals(dequeue.shift(), 9)
	assertEquals(dequeue.shift(), 8)
	assertEquals(dequeue.shift(), 7)
	assertEquals(dequeue.shift(), 6)

	assertEquals(dequeue.pop(), null)
	assertEquals(dequeue.shift(), null)
})
