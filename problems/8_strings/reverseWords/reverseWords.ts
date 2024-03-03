/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @return {string} The reversed string.
 * @example
 * reverseString("hello") = "olleh"
 * reverseString("hello world") = "dlrow olleh"
 */
export function reverseWords(str: string): string {
	return (str === "") ? "" : str.split(" ").reverse().join(" ")
}
