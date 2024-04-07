/**
 * Check if two strings are anagrams.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @return {boolean} Returns true if the strings are anagrams, false otherwise.
 * @example
 * isAnagram("hello", "olleh") = true
 * isAnagram("hello", "world") = false
 * isAnagram("hello", "leolh") = true
 */

export function isAnagram(str1: string, str2: string): boolean {
	return str1.split("").sort().join("") === str2.split("").sort().join("")
}

export function isAnagram2(str1: string, str2: string): boolean {
	if (str1.length !== str2.length) {
		return false
	}

	const characterMap = new Map()

	for (let i = 0; i < str1.length; i++) {
		const char1 = str1[i]
		if (characterMap.has(char1)) {
			const count = characterMap.get(char1)
			characterMap.set(char1, count + 1)
		} else {
			characterMap.set(char1, 1)
		}

		const char2 = str2[i]
		if (characterMap.has(char2)) {
			const count = characterMap.get(char2)
			characterMap.set(char2, count - 1)
		} else {
			characterMap.set(char2, -1)
		}
	}

	for (const [_char, count] of characterMap) {
		if (count !== 0) {
			return false
		}
	}

	return true
}

export function isAnagram3(str1: string, str2: string) {
	let map = new Array(256).fill(0)

	for (let i = 0; i < str1.length; i++) {
		map[str1.charCodeAt(i)]++
	}

	for (let i = 0; i < str2.length; i++) {
		map[str2.charCodeAt(i)]--
	}
	return map.every((value) => value === 0)
}
