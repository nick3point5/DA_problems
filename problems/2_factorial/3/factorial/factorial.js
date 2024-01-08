/**
 * Calculates the factorial of a given a [Whole Number](https://www.cuemath.com/numbers/whole-numbers/).
 * Throw an error if the given number is not a [Whole Number](https://www.cuemath.com/numbers/whole-numbers/).
 *
 * @param {number} n - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 * @throws {Error} Throws an error if the input number is not a whole number.
 * @example
 * ```
 * factorial(0) = 1
 * factorial(1) = 1
 * factorial(2) = 2 * 1 = 2
 * factorial(3) = 3 * 2 * 1 = 6
 * factorial(4) = 4 * 3 * 2 * 1 = 24
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * ```
 */
export function factorial(n) {
	const factorialArray = []
	if (n == 0 ) {
		return 1
	} else if (isNaN(n) || n < 0 || (n - Math.floor(n)) !== 0) {
		throw new Error(`Not a Number`);

	} else {
		for (let i = 0; i < n; i++) {
			factorialArray[i] = i+1
		}
		
        var totalNumber = 1
        for (let j = 0; j < factorialArray.length; j++) {
            totalNumber = Number(totalNumber)  * Number(factorialArray[j])
            
        }
        return totalNumber
      
	}

	
}

