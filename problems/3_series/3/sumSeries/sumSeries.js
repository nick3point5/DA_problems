/**
 * Sums a series of numbers up to a given whole number.
 *
 * @param {number} n - The upper limit of the series.
 * @return {number} The sum of the series.
 * @throws {Error} Throws an error if the input number is not a whole number.
 * @example
 * sumSeries(3) = 1 + 2 + 3 = 6
 * sumSeries(5) = 1 + 2 + 3 + 4 + 5 = 15
 * sumSeries(0) = 0
 */
export function sumSeries(n) {
	const sumSeriesArray = []
	if (n == 0 ) {
		return 0
	} else if (isNaN(n) || n < 0 || (n - Math.floor(n)) !== 0) {
		throw new Error(`Not a Number`);

	} else {
		for (let i = 0; i < n; i++) {
			sumSeriesArray[i] = i+1
		}
		
        var totalNumber = 0
        for (let j = 0; j < sumSeriesArray.length; j++) {
            totalNumber = Number(totalNumber)  + Number(sumSeriesArray[j])
        }
        return totalNumber
      
	}
}
