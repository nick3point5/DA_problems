import { Stack } from "./Stack.js"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("Stack 1", () => {
	const stack = new Stack()
	assertEquals(stack.pop(), null)
})

Deno.test("Stack 2", () => {
	const stack = new Stack()
	stack.push(1)
	assertEquals(stack.pop(), 1)
	assertEquals(stack.pop(), null)
})

Deno.test("Stack 3", () => {
	const stack = new Stack()
	stack.push(1)
	stack.push(2)
	assertEquals(stack.pop(), 2)
	assertEquals(stack.pop(), 1)
	assertEquals(stack.pop(), null)
})

Deno.test("Stack 4", () => {
	const stack = new Stack()
	stack.push(3)
	stack.push(1)
	stack.push(2)
	assertEquals(stack.pop(), 2)
	assertEquals(stack.pop(), 1)
	assertEquals(stack.pop(), 3)
	assertEquals(stack.pop(), null)
})

Deno.test("Stack 5", () => {
	const stack = new Stack()
	stack.push(2)
	stack.push(2)
	stack.push(2)
	assertEquals(stack.pop(), 2)
	assertEquals(stack.pop(), 2)
	assertEquals(stack.pop(), 2)
	assertEquals(stack.pop(), null)
})
