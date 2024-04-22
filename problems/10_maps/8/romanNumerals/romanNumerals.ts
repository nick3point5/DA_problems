/**
 * Generates a Roman numeral representation of the given number.
 *
 * @param {number} num - The number to convert to Roman numerals. 1 <= num <= 3999
 * @return {string} The Roman numeral representation of the input number
 * @example
 * romanNumerals(1) = "I"
 * romanNumerals(2) = "II"
 * romanNumerals(5) = "V"
 * romanNumerals(10) = "X"
 * romanNumerals(14) = "XIV"
 * romanNumerals(120) = "CXX"
 * romanNumerals(400) = "CD"
 * romanNumerals(1000) = "M"
 * romanNumerals(3999) = "MMMCMXCIX"
 */
export function romanNumerals(input: number): string {
	const romanNumerals = [ //dictionary instead of map because it has an explicit order
		{ number: 1000, numeral: "M" },
		{ number: 900, numeral: "CM" },
		{ number: 500, numeral: "D" },
		{ number: 400, numeral: "CD" },
		{ number: 100, numeral: "C" },
		{ number: 90, numeral: "XC" },
		{ number: 50, numeral: "L" },
		{ number: 40, numeral: "XL" },
		{ number: 10, numeral: "X" },
		{ number: 9, numeral: "IX" },
		{ number: 5, numeral: "V" },
		{ number: 4, numeral: "IV" },
		{ number: 1, numeral: "I" },
	];

	let result = ""

	for (const {number, numeral} of romanNumerals) {
		while (input >= number) {
			result = result.concat(numeral)
			input -= number
		}
	}
	

	return result
}
