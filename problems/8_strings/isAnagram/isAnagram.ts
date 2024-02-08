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
	str1 = str1.split("").sort().join("")
	str2 = str2.split("").sort().join("")
	return str1 === str2
}
