/**
 * Calculates the value of an investment over a given time period with uniform deposits.
 *
 * @param {number} principal - the initial investment amount
 * @param {number} deposit - the amount deposited at each time period
 * @param {number} rate - the annual interest rate as a decimal
 * @param {number} time_periods - the number of time periods
 * @return {number} The calculated amount after interest rounded to the nearest penny
 */
export function uniformInvestmentCalculator(principal, deposit, rate, time_periods) {
	let totalMoney = (Math.round((principal + (time_periods * deposit) * ((rate+1)**time_periods))*100))/100
	
	return totalMoney
}
