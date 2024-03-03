/**
 * Check if a given string is a palindrome.
 * A palindrome is a string that reads the same forward and backward, ignoring spaces and punctuation.
 *
 * @param {string} str - The string to be checked.
 * @return {boolean} Returns true if the string is a palindrome, false otherwise.
 * @example
 * isPalindrome("racecar") = true
 * isPalindrome("hello") = false
 * isPalindrome("A man, a plan, a canal: Panama") = true
 */
export function isPalindrome(str: string): boolean {
	str = str.toLowerCase().replaceAll(/\W/g, "")

	if (str.length <= 1) {
		return true
	}

	let left = 0
	let right = str.length - 1

	while (left < right) {
		if (str[left] !== str[right]) {
			return false
		}
		left++
		right--
	}

	return true
}

export function isPalindrome2(str: string): boolean {
	str = str.toLowerCase().replace(/[^a-z]/g, "")
	return str === str.split("").reverse().join("")
}

export function isPalindrome3(str: string): boolean {
	function filterFunction(c) {
		if (97 <= c && c <= 122) return true
		if (65 <= c && c <= 90) return true
		return false
	}
	const array = str
		.split("")
		.map((c) => c.charCodeAt())
		.filter(filterFunction)
		.map((c) => c > 90 ? c - 32 : c)

	for (let i = 0; i < array.length >> 1; i++) {
		if (array.at(i) - array.at(-i - 1) !== 0) {
			return false
		}
	}

	return true
}

export function isPalindrome4(str: string): boolean {
	str = str.toLowerCase().replace(/\W/g, "")
	const stack = []
	const mid = str.length >> 1
	for (let i = 0; i < mid; i++) {
		stack.push(str[i])
	}

	for (let i = mid + str.length % 2; i < str.length; i++) {
		if (str[i] !== stack.pop()) {
			return false
		}
	}
	return true
}

export function isPalindrome5(str: string): boolean {
	function cleanString(str: string): string {
		return str
			.toLowerCase()
			.replace(/[^a-z0-9]/gi, "")
	}

	function checkPalindrome(str: string): boolean {
		if (str.length <= 1) {
			return true
		}
		if (str.at(0) !== str.at(-1)) {
			return false
		}
		return checkPalindrome(str.slice(1))
	}

	return checkPalindrome(cleanString(str))
}
