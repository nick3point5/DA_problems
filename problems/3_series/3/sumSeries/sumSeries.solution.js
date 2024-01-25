/**
 * Sums a series of numbers up to a given whole number.
 *
 * @param {number} n - The upper limit of the series.
 * @return {number} The sum of the series.
 * @throws {Error} Throws an error if the input number is not a whole number.
 * @example
 * sumSeries(3) = 1 + 2 + 3 = 6
 * sumSeries(5) = 1 + 2 + 3 + 4 + 5 = 15
 * sumSeries(0) = 0
 */
export function sumSeries(n) {
	if (n < 0 || n % 1 !== 0) {
		throw new Error("Not a whole number")
	}

	let result = 0
	for (let i = 1; i <= n; i++) {
		result += i
	}

	return result
}

export function sumSeries2(n) {
	if (n < 0 || n % 1 !== 0) {
		throw new Error("Not a whole number")
	}

	return (n * (n + 1)) / 2
}
