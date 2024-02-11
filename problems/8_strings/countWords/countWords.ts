/**
 * Counts the number of words in a given string.
 *
 * @param {string} str - The string to count the words from.
 * (characters are limited to a-z and A-Z and single spaces)
 * (there are no leading or trailing spaces)
 * @return {number} The number of words in the string.
 */
export function countWords(str: string): number {
	if (str === "") {
		return 0
	}

	return str.split(" ").length
}
