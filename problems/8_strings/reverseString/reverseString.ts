/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @return {string} The reversed string.
 */
export function reverseString(str: string): string {
	return str.split("").reverse().join("")
}
