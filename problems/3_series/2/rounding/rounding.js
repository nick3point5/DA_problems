/**
 * Rounds a number to a specified precision.
 *
 * @param {number} number - The number to round.
 * @param {number} [precision=0] - The number of decimal places to round to (defaults to 0).
 * @return {number} The rounded number.
 */
export function rounding(number, precision = 0) {
	if (precision >= 0) {
		return Number(number.toFixed(precision))
	} else {
		var precise = 10 ** precision
		var rePrecise = 10 ** Math.abs(precision)
		number = Math.round(number * precise)
		number = number * rePrecise
		return Number(number)
	}
	
	
	
	

}
