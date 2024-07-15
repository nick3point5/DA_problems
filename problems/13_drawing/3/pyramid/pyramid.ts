/**
 * Generates a pyramid pattern with the specified height.
 *
 * @param {number} height - The height of the pyramid.
 * @return {string} - The pyramid pattern as a string.
 * @example
 * pyramid(1) = "#\n"
 * pyramid(3) = "  #  \n ### \n#####\n"
 * pyramid(5) = "    #    \n   ###   \n  #####  \n ####### \n#########\n"
 */
export function pyramid(height: number): string {
	let pyramidString = ""
	let width = 1
	const finalWidth = 1 + ((height-1)*2)

	for (let i = 1; i <= height; i++) {
		if (i === height) {
			pyramidString += "#".repeat(finalWidth)
		} else {
			const spacing = (finalWidth - width)/2
			pyramidString += " ".repeat(spacing)
			pyramidString += "#".repeat(width)
			pyramidString += " ".repeat(spacing)
		}
		pyramidString += "\n"
		width+= 2
	}

	return pyramidString
}
