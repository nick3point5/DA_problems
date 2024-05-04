/**
 * A function that checks if a given pattern matches a given set of words.
 *
 * @param {string} pattern - the pattern to match
 * @param {string} words - the words to match against the pattern
 * @return {boolean} true if the pattern matches the words, false otherwise
 * @example
 * wordPattern("abba", "dog cat cat dog") = true
 * wordPattern("abba", "dog cat cat fish") = false
 * wordPattern("aaaa", "dog cat cat dog") = false
 */
export function wordPattern(pattern: string, words: string): boolean {
	const wordsArray = words.split(" ")
	const patternArray = pattern.split("")

	if (wordsArray.length !== patternArray.length) {
		return false
	}

	const wordToPattern = new Map<string, string>()
	const patternToWord = new Map<string, string>()

	for (let i = 0; i < wordsArray.length; i++) {
		const word = wordsArray[i]
		const patternChar = patternArray[i]

		if (wordToPattern.has(word) && wordToPattern.get(word) !== patternChar) {
			return false
		}

		if (patternToWord.has(patternChar) && patternToWord.get(patternChar) !== word) {
			return false
		}

		wordToPattern.set(word, patternChar)
		patternToWord.set(patternChar, word)
	}

	return true
}
