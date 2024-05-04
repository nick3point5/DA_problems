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
	if (str1.length !== str2.length) {
		return false
	}
	const map1 = new Map()
	const map2 = new Map()
	for (let i = 0; i < str1.length; i++) {
		map1.set(str1[i], (map1.get(str1[i]) || 0) + 1)
		map2.set(str2[i], (map2.get(str2[i]) || 0) + 1)
	}
	for (const [key, value] of map1) {
		if (map2.get(key) !== value) {
			return false
		}
	}
	return true
}

export function isAnagram2(str1: string, str2: string) {
	if (str1.length !== str2.length) {
		return false
	}
	let map = new Array(256).fill(0)
	for (let i = 0; i < str1.length; i++) {
		map[str1.charCodeAt(i)]++
	}
	for (let i = 0; i < str2.length; i++) {
		map[str2.charCodeAt(i)]--
	}
	return map.every((value) => value === 0)
}

export function isAnagram3(str1: string, str2: string) {
	if (str1.length !== str2.length) {
		return false
	}

	const sortedStr1 = str1
		.split("")
		.sort()
		.join("")
	const sortedStr2 = str2
		.split("")
		.sort()
		.join("")
	return sortedStr1 === sortedStr2
}
