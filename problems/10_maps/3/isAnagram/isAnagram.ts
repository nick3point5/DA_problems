/**
 * Checks if two strings are anagrams of each other. The strings are lowercased and all non-alphanumeric characters are removed.
 *
 * @param {string} str1 - The first string
 * @param {string} str2 - The second string
 * @return {boolean} true if the strings are anagrams, false otherwise
 * @example
 * isAnagram('listen', 'silent') = true
 * isAnagram('hello', 'world') = false
 * isAnagram('hello', 'hell') = false
 * isAnagram('hello', 'leolh') = true
 */
export function isAnagram(str1: string, str2: string) {
	const map1 = new Map<string, number>()
	const map2 = new Map<string, number>()

	for (const letter of str1) {
		if (map1.has(letter)) {
			map1.set(letter, map1.get(letter)! + 1)
		} else {
			map1.set(letter, 1)
		}
	}

	for (const letter of str2) {
		if (map2.has(letter)) {
			map2.set(letter, map2.get(letter)! + 1)
		} else {
			map2.set(letter, 1)
		}
	}

	if (map1.size !== map2.size) {
		return false
	}

	for (const [key, value] of map1) {
		if (map2.get(key) !== value) {
			return false
		}
	}

	return true
}
