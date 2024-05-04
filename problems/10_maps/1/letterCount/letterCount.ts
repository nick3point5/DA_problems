/**
 * Counts the occurrences of each letter in the input string and returns a map with the counts.
 *
 * @param {string} s - the input string
 * @return {Map<string, number>} a map with the counts of each letter
 * @example
 * letterCount("hello") = Map("h" -> 1, "e" -> 1, "l" -> 2, "o" -> 1)
 * letterCount("world") = Map("w" -> 1, "o" -> 1, "r" -> 1, "l" -> 1, "d" -> 1)
 * letterCount("") = Map()
 * letterCount("abracadabra") = Map("a" -> 5, "b" -> 2, "r" -> 2, "c" -> 1, "d" -> 1)
 */
export function letterCount(s: string) {
	const map = new Map<string, number>()
	
	for (const letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) ! + 1)
        } else {
            map.set(letter, 1)
        }
    }

	return map
}
