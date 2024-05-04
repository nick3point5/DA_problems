/**
 * Decode a Roman numeral string to an integer.
 *
 * @param {string} s - The Roman numeral string to decode.
 * @return {number} The decoded integer value.
 */
export function romanNumeralsDecode(s: string): number {
	const romanNumerals = new Map<string, number>(['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]) //map of roman numerals

	let result = 0 //start off with 0 as value

	for (let i = 0; i < s.length; i++) { //loop through the given roman numeral
		const currentNumeral = romanNumerals.get(s[i])! //find the current numeral from the roman numeral map
		const nextNumeral = romanNumerals.get(s[i+1])! //find the next numeral from the roman numeral map

		if (nextNumeral && currentNumeral < nextNumeral) { //check if there is a next numeral and also check if current numeral is less than next numeral
            result += (nextNumeral - currentNumeral) //if both is true then increase the result by next numeral - current numeral (for example IV = 4-1)
			//this will always work because roman numerals go in order from largest to smallest so if the current numeral is less than the next numeral that means it has to be a subtracting situation
            i++ //skip the next numeral because we already used it here
        } else {
            result += currentNumeral //else just increment by the current numeral
        }
	}

	return result //return final value
}
