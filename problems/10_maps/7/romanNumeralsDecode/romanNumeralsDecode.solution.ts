/**
 * Decode a Roman numeral string to an integer.
 *
 * @param {string} s - The Roman numeral string to decode.
 * @return {number} The decoded integer value.
 */
export function romanNumeralsDecode(s: string) {
	let result = 0
	const map = new Map()
	map.set("I", 1)
	map.set("V", 5)
	map.set("X", 10)
	map.set("L", 50)
	map.set("C", 100)
	map.set("D", 500)
	map.set("M", 1000)

	for (let i = 0; i < s.length - 1; i++) {
		const letter = s[i]
		const num = map.get(letter)
		if (
			(letter == "I" || letter == "X" || letter == "C") &&
			num < map.get(s[i + 1])
		) {
			result -= num
		} else {
			result += num
		}
	}
	result += map.get(s[s.length - 1])
	return result
}
export function romanNumeralsDecode2(s: string) {
	const dictionary: { [key: string]: number } = {
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	let sum = 0

	for (const numeral in dictionary) {
		const regex = new RegExp(numeral, "g")
		const matches = s.match(regex)
		if (matches) {
			sum += matches.length * dictionary[numeral]
			s = s.replace(regex, "")
		}
	}

	return sum
}

export function romanNumeralsDecode3(s: string) {
	const map = new Map([
		["CM", 900],
		["CD", 400],
		["XC", 90],
		["XL", 40],
		["IX", 9],
		["IV", 4],
		["M", 1000],
		["D", 500],
		["C", 100],
		["L", 50],
		["X", 10],
		["V", 5],
		["I", 1],
	])
	let sum = 0

	for (let i = 0; i < s.length; i++) {
		const twoCharSymbol = s[i] + s[i + 1]
		const oneCharSymbol = s[i]

		if (map.has(twoCharSymbol)) {
			sum += map.get(twoCharSymbol)!
			i++
		} else {
			sum += map.get(oneCharSymbol)!
		}
	}

	return sum
}
