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
export function romanNumerals(num: number): string {
	const romanNumerals = new Map<number,string>([
		[1, "I"],
		[5, "V"],
		[10, "X"],
		[50, "L"],
		[100, "C"],
		[500, "D"],
		[1000, "M"]
	])

	const specialCases = [
		["DCCCC", "CM"],
		["CCCC", "CD"],
		["LXXXX", "XC"],
		["XXXX", "XL"],
		["VIIII", "IX"],
		["IIII", "IV"],
	]


	let result = ""
	let subtractor = 1000
	
	
	
	return result
}
