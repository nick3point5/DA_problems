/**
 * Reverses words of a given string.
 *
 * @param {string} str - The string to be reversed.
 * @return {string} The reversed string.
 * @example
 * reverseWords("hello") = "hello"
 * reverseWords("hello world") = "world hello"
 */
export function reverseWords(str: string): string {
	return str.split(" ").reverse().join(" ")
}