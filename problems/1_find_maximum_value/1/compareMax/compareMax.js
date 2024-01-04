/**
 * Compares two values and returns the maximum value.
 *
 * @param {number} a - The first value to compare.
 * @param {number} b - The second value to compare.
 * @return {number} The maximum value between a and b.
 */
export function compareMax(a, b) {
	if (a > b) {
		return a
	} else if (b > a) {
		return b
	} else if (b == a) {
		return a
	}
}
