/**
 * Generates the k-th most frequent letter in the given string.
 *
 * @param {string} s - the input string
 * @param {number} k - the rank of the desired frequent letter
 * @return {string} the k-th most frequent letter in the string
 * @example
 * kFrequentLetter('hello', 1) = 'l'
 * kFrequentLetter('1223334444', 2) = '3'
 * kFrequentLetter('1223334444', 4) = '1'
 * kFrequentLetter('cheesy beans', 1) = 'e'
 * kFrequentLetter('cheesy beans', 2) = 's'
 */
export function kFrequentLetter(s: string, k: number) {
    const map = new Map<string, number>()

    for (const letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter)! + 1)
        } else {
            map.set(letter, 1)
        }
    }

    const array:[string,number][] = []

    for (const index of map) {
        array.push(index)
    }
    array.sort((a,b) => b[1] - a[1])

    return array[k - 1][0]
}