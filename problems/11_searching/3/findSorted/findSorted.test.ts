import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts"
import { findSorted } from "./findSorted.ts"


const n = 100_000_000
const big_array = new Array(n)

for (let i = 0; i < n; i++) {
	big_array[i] = i + 1
}

Deno.test("findSorted 1", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findSorted(array, 1), 0)
})

Deno.test("findSorted 2", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findSorted(array, 10), -1)
})

Deno.test("findSorted 3", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findSorted(array, 0), -1)
})

Deno.test("findSorted 4", () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	assertEquals(findSorted(array, 5), 4)
})

Deno.test("findSorted 5", () => {
	const array = big_array

	const n = array.at(-1)!

	assertEquals(findSorted(array, n), n - 1)
})

Deno.test("findSorted 6", () => {
	const array = big_array

	const n = 1

	assertEquals(findSorted(array, n), n - 1)
})

Deno.test("findSorted 7", () => {
	function timeDiff(fn: (array: number[], target: number) => number) {
		return (array: number[], n: number) => {
			const start = performance.now()
			fn(array, n)
			const end = performance.now()

			return end - start
		}
	}


	const getUnsortedTime = timeDiff((array: number[], target: number) => array.indexOf(target))
	const getSortedTime = timeDiff(findSorted)

	let averageSortedTime = 0
	let averageUnsortedTime = 0

	const iter = 100
	for (let i = 0; i < iter; i++) {
		averageSortedTime += getSortedTime(big_array, n)
		averageUnsortedTime += getUnsortedTime(big_array, n)
	}

	averageSortedTime /= iter
	averageUnsortedTime /= iter

	console.log("averageSortedTime", averageSortedTime)
	console.log("averageUnsortedTime", averageUnsortedTime)

	assertEquals(averageSortedTime * 1000 < averageUnsortedTime, true)
})
