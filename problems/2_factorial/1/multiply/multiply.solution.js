/**
 * Multiplies two numbers.
 *
 * @param {number} x - The first number to multiply.
 * @param {number} y - The second number to multiply.
 * @return {number} The product of the two numbers.
 * @example
 * ```
 * multiply(2, 3) = 6
 * multiply(3, 4) = 12
 * ```
 */
export function multiply(x, y) {
	return x * y
}

export function multiply2(x, y) {
	let result = 0
	while (y--) {
		result += x
	}
	return result
}

export function multiply3(x, y) {
	if (y === 0) {
		return 0
	}
	return x + multiply3(x, y - 1)

	return multiply3(x, y)
}
