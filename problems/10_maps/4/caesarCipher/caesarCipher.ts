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
export function caesarCipher(s: string, k: number): string  {
	if (k > 26) {
		k = k % 26
	} else if (k === 26) {
		return s
	}

	const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	const lettersMap = new Map<string, string>()

	for (let i = 0; i < lettersArray.length; i++) {
		if (i === lettersArray.length - 1) {
			lettersMap.set(lettersArray[i], lettersArray[k-1])
		} else {
			lettersMap.set(lettersArray[i], lettersArray[i+k])
		}
	}

	let returnString = ""

	for (const letter of s) {
		const value = lettersMap.get(letter)

		returnString += value
	}

	return returnString
}