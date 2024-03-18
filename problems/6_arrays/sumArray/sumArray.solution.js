/**
 * Calculates the sum of all the elements in an array.
 *
 * @param {number[]} array - The array of numbers to sum.
 * @return {number} The sum of all the elements in the array.
 * @example
 * sumArray([1, 2, 3, 4, 5]); // 15
 * sumArray([1, 2, 3, 4, 5, 6]); // 21
 * sumArray([-1, 2, -3, 4, -5, 6, -7, 8, -9]); // -5
 */
export function sumArray(array) {
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum
}

export function sumArray2(array) {
	return array.reduce((a, b) => a + b, 0)
}

export function sumArray3(array) {
	let sum = 0
	array.forEach((value) => {
		sum += value
	})

	return sum
}

export function sumArray4(array) {
	function sum(array, acc = 0) {
		if (array.length === 0) {
			return acc
		}
		return sum(array.slice(1), acc + array[0])
	}

	return sum(array)
}
