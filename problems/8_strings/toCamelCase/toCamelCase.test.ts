import { toCamelCase } from "./toCamelCase..ts"
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"

Deno.test("toCamelCase 1", () => {
	assertEquals(toCamelCase("hello world"), "helloWorld")
})

Deno.test("toCamelCase 2", () => {
	assertEquals(toCamelCase("camel case method"), "camelCaseMethod")
})

Deno.test("toCamelCase 3", () => {
	assertEquals(toCamelCase("say hello"), "sayHello")
})

Deno.test("toCamelCase 4", () => {
	assertEquals(toCamelCase("hello"), "hello")
})

Deno.test("toCamelCase 5", () => {
	assertEquals(toCamelCase(""), "")
})

Deno.test("toCamelCase 6", () => {
	assertEquals(toCamelCase("helloWorld"), "helloWorld")
})

Deno.test("toCamelCase 7", () => {
	assertEquals(toCamelCase("camelCaseMethod"), "camelCaseMethod")
})

Deno.test("toCamelCase 8", () => {
	assertEquals(toCamelCase("H e l l o"), "HELLO")
})
