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
export function uniqueWord(s: string): string {
	let words =  s.split(" ")

	if (words.length === 1) {
		return words[0]
	}

	let wordMap = new Map<string, number>()

	for (const word of words) {
		if (wordMap.get(word)) {
			wordMap.set(word, wordMap.get(word)! + 1)
		} else {
			wordMap.set(word, 1)
		}
	}

	for (const [key, value] of wordMap) {
		if (value === 1) {
			return key
		}
	}

	return ""
}