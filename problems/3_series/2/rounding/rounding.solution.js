/**
 * Rounds a number to a specified precision.
 *
 * @param {number} number - The number to round.
 * @param {number} [precision=0] - The number of decimal places to round to (defaults to 0).
 * @return {number} The rounded number.
 */
export function rounding(number, precision = 0) {
	const result = Math.round(number * 10 ** precision) / 10 ** precision
	return result
}
