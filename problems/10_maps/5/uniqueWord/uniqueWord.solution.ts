/**
 * Function that returns the unique word in a given string.
 *
 * @param {string} s - the input string to find the unique word from. The input is guaranteed to have one unique word.
 * @return {string} the unique word found in the input string
 * @example
 * uniqueWord("hello world world") = "hello"
 * uniqueWord("hello") = "hello"
 * uniqueWord("hello hello world") = "world"
 * uniqueWord("foo bar foo baz foo bar") = "baz"
 */
export function uniqueWord(s: string) {
	const countMap = new Map<string, number>()

	for (const word of s.split(" ")) {
		countMap.set(word, (countMap.get(word) ?? 0) + 1)
	}

	let unique = ""
	countMap.forEach((count, word) => {
		if (count === 1) {
			unique = word
		}
	})

	return unique
}
