/**
 * Calculates the factorial of a given a [Whole Number](https://www.cuemath.com/numbers/whole-numbers/).
 * Throw an error if the given number is not a [Whole Number](https://www.cuemath.com/numbers/whole-numbers/).
 *
 * @param {number} n - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 * @throws {Error} Throws an error if the input number is not a whole number.
 * @example
 * ```
 * factorial(0) = 1
 * factorial(1) = 1
 * factorial(2) = 1 * 2 = 2
 * factorial(3) = 1 * 2 * 3 = 6
 * factorial(4) = 1 * 2 * 3 * 4 = 24
 * factorial(5) = 1 * 2 * 3 * 4 * 5 = 120
 * ```
 */
export function factorial(n) {
	if (n % 1 !== 0 || n < 0) {
		throw new Error("Not a whole number")
	}

	let result = 1

	for (let i = 1; i <= n; i++) {
		result *= i
	}

	return result
}

export function factorial2(n) {
	if (n % 1 !== 0 || n < 0) {
		throw new Error("Not a whole number")
	}

	if (n === 1 || n === 0) {
		return 1
	}

	return n * factorial2(n - 1)
}
