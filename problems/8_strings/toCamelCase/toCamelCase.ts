/**
 * Converts a string to camel case.
 *
 * @param {string} str - The string to convert to camel case.
 * (characters are limited to a-z and A-Z and single spaces)
 * (there are no leading or trailing spaces)
 * @return {string} The converted camel case string.
 * @example
 * toCamelCase("Hello World") = "helloWorld"
 * toCamelCase("This is a string with spaces") = "thisIsAStringWithSpaces"
 */
export function toCamelCase(str: string): string {
	return str.toLowerCase()
}
