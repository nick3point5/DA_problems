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
export function wordPattern(pattern: string, s: string) {
	const words = s.split(" ")
	if (words.length !== pattern.length) {
		return false
	}

	const map: { [key: string]: string } = {}
	const seenWords = new Set<string>()

	for (let i = 0; i < words.length; i++) {
		const p = pattern[i]
		const w = words[i]

		if (!map[p]) {
			if (seenWords.has(w)) {
				return false
			}
			map[p] = w
			seenWords.add(w)
		} else if (map[p] !== w) {
			return false
		}
	}

	return true
}

export function wordPattern2(pattern: string, words: string) {
	const pattern_to_word: Map<string, string> = new Map()
	const word_to_pattern: Map<string, string> = new Map()

	const wordList: string[] = words.split(" ")
	let i: number = 0

	for (const key of pattern) {
		if ((pattern_to_word.get(key) || wordList[i]) !== wordList[i]) {
			return false
		} else if ((word_to_pattern.get(wordList[i]) || key) !== key) {
			return false
		}

		pattern_to_word.set(key, wordList[i])
		word_to_pattern.set(wordList[i], key)

		i++
	}

	return i === wordList.length
}

export function wordPattern3(pattern: string, words: string) {
	const wordMap = new Map<string, string>()
	const wordSet = new Set<string>()
	const wordList = words.split(" ")
	if (pattern.length !== wordList.length) {
		return false
	}
	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i]
		const word = wordList[i]
		if (wordMap.has(char) && wordMap.get(char) !== word) {
			return false
		}
		if (!wordMap.has(char) && wordSet.has(word)) {
			return false
		}
		wordMap.set(char, word)
		wordSet.add(word)
	}
	return true
}
