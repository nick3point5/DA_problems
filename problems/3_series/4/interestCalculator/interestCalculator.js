/**
 * Calculates the interest for a given principal amount, interest rate, and time period.
 *
 * @param {number} principal - The principal amount.
 * @param {number} rate - The interest rate in decimal form (10% = 0.1).
 * @param {number} time_periods - The number of time periods interest is accrued.
 * @return {number} The calculated amount after interest rounded to the nearest penny.
 * @example
 * ```
 * interestCalculator(1, 0.1, 1) = 1.1
 * interestCalculator(1, 0.11, 1) = 1.11
 * interestCalculator(1, 0.115, 1) = 1.12
 * interestCalculator(250, 0.1, 5) = 402.63
 * interestCalculator(235, 0.32, 40) = 15632380.25
 * ```
 */
export function interestCalculator(principal, rate, time_periods) {
	var totalMoney = (Math.round((principal * ((rate+1)**time_periods))*100))/100
	return totalMoney
}
