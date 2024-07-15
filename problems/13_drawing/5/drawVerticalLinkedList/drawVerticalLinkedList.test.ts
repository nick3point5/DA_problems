import { drawVerticalLinkedList } from "./drawVerticalLinkedList.ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { dirname, fromFileUrl } from "https://deno.land/std/path/mod.ts"
import { linkedList } from "../../../4_nodes_list/2/linkedList/linkedList.js"

const directory = dirname(import.meta.url)

Deno.test("drawVerticalLinkedList 1", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result1.txt"))
	const node = linkedList(new Array(0).fill(0).map((_, i) => i + 1))

	const result = drawVerticalLinkedList(node)
	assertEquals(result, expected)
})

Deno.test("drawVerticalLinkedList 2", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result2.txt"))
	const node = linkedList(new Array(1).fill(0).map((_, i) => i + 1))

	const result = drawVerticalLinkedList(node)
	assertEquals(result, expected)
})

Deno.test("drawVerticalLinkedList 3", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result3.txt"))
	const node = linkedList(new Array(3).fill(0).map((_, i) => i + 1))

	const result = drawVerticalLinkedList(node)
	assertEquals(result, expected)
})

Deno.test("drawVerticalLinkedList 4", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result4.txt"))
	const node = linkedList(new Array(5).fill(0).map((_, i) => i + 1))

	const result = drawVerticalLinkedList(node)
	assertEquals(result, expected)
})

Deno.test("drawVerticalLinkedList 5", () => {
	const expected = Deno.readTextFileSync(fromFileUrl(directory + "/result5.txt"))
	const node = linkedList(new Array(100).fill(0).map((_, i) => i + 1))

	const result = drawVerticalLinkedList(node)
	assertEquals(result, expected)
})
