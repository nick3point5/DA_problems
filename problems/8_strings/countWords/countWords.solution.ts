/**
 * Counts the number of words in a given string.
 *
 * @param {string} str - The string to count the words from.
 * (characters are limited to a-z and A-Z and single spaces)
 * (there are no leading or trailing spaces)
 * @return {number} The number of words in the string.
 * @example
 * countWords("Hello World") = 2
 * countWords("This is a string with spaces") = 6
 */
export function countWords(str: string): number {
	if (str.length === 0) {
		return 0
	}
	return str.split(" ").length
}

export function countWords2(str: string): number {
	if (str === "") {
		return 0
	}
	return str.match(/\w+/g)?.length || 0
}

export function countWords3(str: string): number {
	if (str === "") {
		return 0
	}

	let count = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			count++
		}
	}

	return count + 1
}
