/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @return {number} The sum of the two numbers.
 */
export function addNumbers(a, b) {
	return a + b
}

export function addNumbers2(a, b) {
	while (b--) {
		a++
	}
	return a
}

export function addNumbers3(a, b) {
	if(b === 0) {
		return a
	}
	return addNumbers3(a++, b--)
}

export function addNumbers3(a, b) {
	if (b === 0) {
		return a
	}
	return addNumbers3(a++, b--)
}
