/**
 * Encrypts the input string using the Caesar Cipher algorithm with the given key.
 * The key is used to shift the letters in the input string by the specified amount.
 * The Caesar Cipher is a simple substitution cipher that uses a key to encrypt and decrypt a message
 * shifting each letter by the key's value.
 *
 * @param {string} s - the input string to be encrypted. The input string is only lowercase letters
 * @param {number} k - the key for the Caesar Cipher algorithm. k > 0
 * @return {string} the encrypted string
 * @example
 * caesarCipher("hello", 1) = "ifmmp"
 * caesarCipher("hello", 3) = "khoor"
 * caesarCipher("hello", 5) = "mjqqt"
 * caesarCipher("hello", 26) = "hello"
 * caesarCipher("hello", 27) = "ifmmp"
 */
export function caesarCipher(s: string, k: number) {
	function buildMap(k: number) {
		const letters = "abcdefghijklmnopqrstuvwxyz"
		const map: Map<string, string> = new Map()

		for (let i = 0; i < letters.length; i++) {
			const letter = letters[i]
			const encodeIndex = (i + k) % n
			const encodeLetter = letters[encodeIndex]
			map.set(letter, encodeLetter)
		}

		return map
	}
	const map = buildMap(k)

	let encryptedCode = ""
	const n = s.length
	for (let i = 0; i < n; i++) {
		const letter = s[i]
		encryptedCode += map.get(letter)
	}
	return encryptedCode
}

export function caesarCipher2(s: string, k: number) {
	const letters = "abcdefghijklmnopqrstuvwxyz"
	const cipher = letters.substring(k % 26) + letters.substring(0, k % 26)

	type MapObject = {
		[key: string]: string
	}

	const map: MapObject = {}

	for (let i = 0; i < letters.length; i++) {
		map[letters[i]] = cipher[i]
	}

	let result = ""
	for (let i = 0; i < s.length; i++) {
		const letter = s[i]
		result += map[letter]
	}

	return result
}

import { rotate } from "../../../6_arrays/rotate/rotate.solution.ts"

export function caesarCipher3(s: string, k: number) {
	function buildMap(k: number) {
		const letters = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		]
		const letters2 = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		]
		const rotateK = letters.length - (k % letters.length)
		const shiftedLetters = rotate(letters2, rotateK)
		const map: { [key: string]: string } = {}

		const n = letters.length
		for (let i = 0; i < n; i++) {
			const letter = letters[i]
			map[letter] = shiftedLetters[i]
		}

		return map
	}
	const map = buildMap(k)

	let encryptedCode = ""
	const n = s.length
	for (let i = 0; i < n; i++) {
		const letter = s[i]
		encryptedCode += map[letter]
	}
	return encryptedCode
}

export function caesarCipher4(s: string, k: number) {
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	]

	let encryptedCode = ""
	const n = s.length
	for (let i = 0; i < n; i++) {
		const letter = s[i]
		const encryptedIndex = (letters.indexOf(letter) + k) % 26
		encryptedCode += letters[encryptedIndex]
	}
	return encryptedCode
}
