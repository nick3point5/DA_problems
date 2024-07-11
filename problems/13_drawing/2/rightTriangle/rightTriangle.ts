/**
 * Generates a right triangle pattern with the specified height.
 *
 * @param {number} height - The height of the triangle.
 * @return {string} The string representation of the right triangle pattern.
 * @example
 * rightTriangle(1) = "#"
 * rightTriangle(3) = "#\n##\n###\n"
 * rightTriangle(5) = "#\n##\n###\n####\n#####\n"
 */
export function rightTriangle(size: number): string {
	let triangle = ""

	for (let i = 1; i <= size; i++) {
		triangle += "#".repeat(i)
		triangle += "\n"
	}

	return triangle
}
